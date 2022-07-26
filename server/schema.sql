DROP DATABASE IF EXISTS jihedtodo;
CREATE DATABASE IF NOT EXISTS jihedtodo;
USE jihedtodo;


CREATE TABLE IF NOT EXISTS mylist(
id int(6) NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(20) NOT NULL,
age VARCHAR(20) NOT NULL,
PRIMARY KEY (id)
);

-- insert into mylist (FirstName,LastName,age) VALUES ("jihed","abidi",'25');