const { UserList, MovieList } = require("../data");
const _ = require("lodash");
const { nanoid } = require("nanoid");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, { id }) => {
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // movie quries
    movies: () => {
      return MovieList;
    },
    movie: (parent, { name }) => {
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => movie.year >= 2000 && movie.year <= 2010
      );
    },
  },
  Mutation: {
    createUser: (parent, { input: user }) => {
      user.id = nanoid();
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, { input: { id, username } }) => {
      console.log(id);
      console.log(username);

      let userUpdated = {};
      UserList.forEach((user) => {
        if (user.id == id) {
          user.username = username;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser: (parent, { id }) => {
      _.remove(UserList, (user) => {
        user.id === Number(id);
      });
      return null;
    },
  },
};

module.exports = { resolvers };
