var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, response) => {
        if (err) {
          throw error;
        } else {
          res.send(JSON.stringify(response));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var msg = req.body;
      models.messages.post(msg, (err, response) => {
        if (err) {
          throw error;
        } else {
          res.send('message posted!');
        }
      });

    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, response) => {
        if (err) {
          throw error;
        } else {
          res.send(JSON.stringify(response));
        }
      });
    },
    post: function (req, res) {
      var msg = req.body;
      models.users.post(msg, (err, response) => {
        if (err) {
          throw error;
        } else {
          res.send('user posted!');
        }
      });
    }
  }
};

