var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var login = db.login;
      login.connect();
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      login.query(queryString, queryArgs, (err, response) => {
        if (err) {
          throw error;
        } else {
          return response;
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

