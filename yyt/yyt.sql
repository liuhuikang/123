SET NAMES UTF8;
DROP DATABASE IF EXISTS yyt;
CREATE DATABASE yyt CHARSET=UTF8;
USE yyt;

CREATE TABLE yyt_sb_list(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  sb_name VARCHAR(16),
  sb_username VARCHAR(8),
  sb_url VARCHAR(128)
);
CREATE TABLE yyt_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(16),
  upwd VARCHAR(8)

);

INSERT INTO yyt_sb_list VALUES
(NULL,'夜曲','周杰伦','img/first.jpg');


INSERT INTO yyt_user VALUES
(NULL,'dingding',123456);