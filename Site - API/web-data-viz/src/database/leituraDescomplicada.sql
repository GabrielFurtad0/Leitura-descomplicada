create database leituraDescomplicada;

use leituraDescomplicada;

create table usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(100),
senha varchar(40)
);