create database if not exists bookstore;

use bookstore;
drop table if exists users;
create table users(
	email varchar(30) primary key,
    password varchar(30) not null
);

insert into users values('example@gmail.com', '123abc');
