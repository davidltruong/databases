var db = require('../db');

db.connect();
var msgCount = 0;
var userCount = 0;

db.query('SELECT * FROM users', (err, response) => {
  if (err) {
  } else {
    userCount = response.length;
  }
});


module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      db.query(queryString, queryArgs, (err, response) => {
        if (err) {
          callback(err);
        } else {
          callback(null, response);
        }
      });
    }, // a function which produces all the messages
    post: function (msg, callback) {
      var user = msg.username;
      db.query(`SELECT id FROM users where user = '${user}'`, (err, userid) => {
        if (err) {
          callback(err);
        } else {
          userid = userid[0].id;
          var text = msg.message;
          var roomname = msg.roomname;
          var queryString = 'INSERT INTO messages VALUES (?, ?, ?, ?)';
          var queryArgs = [msgCount += 1, userid, text, roomname];
          db.query(queryString, queryArgs, (err, response) => {
            if (err) {
              callback(err);
            } else {
              callback(null, response);
            }
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];
      db.query(queryString, queryArgs, (err, response) => {
        if (err) {
          callback(err);
        } else {
          callback(null, response);
        }
      });

    },
    post: function (msg, callback) {
      console.log(msg);
      var user = msg.username;

      db.query(`SELECT id FROM users WHERE user = '${user}'`, (err, id) => {

        if (Array.isArray(id) && !(id.length)) {

          var queryString = 'INSERT INTO users VALUES (?, ?)';
          userCount += 1;
          var queryArgs = [userCount, user];
          db.query(queryString, queryArgs, (err, response) => {
            if (err) {
              callback(err);
            } else {
              callback(null, response);
            }
          });
        } else {

          callback(null, id);
        }
      });
    }
  }
};

