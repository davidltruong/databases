CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int,
  User text,
  Message text,
  Room text
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  User text,
  ArrayOfMessages text
);

CREATE TABLE rooms (
  Room text,
  ArrayOfMessage text
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

