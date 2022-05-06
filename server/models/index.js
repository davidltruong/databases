var db = require('../db');

var msgCount = 0;
var userCount = 0;

db.connect();

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
      console.log(typeof user); //string
      var userid = db.query(`SELECT id FROM users where user = '${user}'`);
      console.log('userid', userid_index); //object
      var text = msg.text;
      console.log('text', text); //undefined
      var roomname = msg.roomname;
      console.log(typeof roomname); //string
      var queryString = 'INSERT INTO messages VALUES (?, ?, ?, ?)';
      var queryArgs = [msgCount += 1, userid, text, roomname]; //username, text
      db.query(queryString, queryArgs, (err, response) => {
        if (err) {
          callback(err);
        } else {
          callback(null, response);
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
      var user = msg.username;
      var queryString = 'INSERT INTO users VALUES (?, ?)';
      var queryArgs = [userCount += 1, user];
      db.query(queryString, queryArgs, (err, response) => {
        if (err) {
          callback(err);
        } else {
          callback(null, response);
        }
      });
    }
  }
};

