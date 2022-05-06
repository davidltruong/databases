DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11),
  user_id int(11),
  message varchar(255),
  roomname varchar(255)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int(11),
  user varchar(255)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

