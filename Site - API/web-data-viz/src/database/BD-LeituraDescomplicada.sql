drop database leituraDescomplicada;

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
classeFormulario varchar(20),
titulo varchar(100),
mensagem varchar(100),
fkUsuario int,
constraint fk_formulario_usuario foreign key (fkUsuario) references usuario(id)
);

select * from usuario;
select * from formulario;