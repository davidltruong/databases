var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var login = mysql.createConnection ({
  user: 'root',
  password: '',
  database: 'chat'
});

var callback = ((err) => {
  if (err) {
    console.log('Not connecting', err);
  } else {
    console.log('Connected!');
  }
});


module.exports = login;



