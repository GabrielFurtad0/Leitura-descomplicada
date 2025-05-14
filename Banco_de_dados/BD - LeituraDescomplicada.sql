create database leituraDescomplicada;

use leituraDescomplicada;

create table usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(100),
senha varchar(40),
generoFavorito varchar(20)
);

create table formulario(
id int primary key auto_increment,
fkUsuario int,
classeFormulario varchar(20),
titulo varchar(50),
mensagem varchar(1000),
constraint fk_usuario_formulario foreign key (fkUsuario) references usuario(id));


select * from usuario;
select * from formulario;
