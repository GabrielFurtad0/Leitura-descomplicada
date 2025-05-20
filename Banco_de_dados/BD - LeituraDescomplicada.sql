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
id int auto_increment,
fkUsuario int,
classeFormulario varchar(20),
titulo varchar(50),
mensagem varchar(1000),
constraint fk_usuario_formulario foreign key (fkUsuario) references usuario(id),
primary key (id, fkUsuario)
);

create table questionario(
id int auto_increment,
fkUsuario int,
genero1 varchar(30),
genero2 varchar(30),
constraint fk_usuario_questionario foreign key (fkUsuario) references usuario(id),
primary key (id, fkusuario)
);
truncate table questionario;

create table lista(
nome varchar(100),
img varchar(200),
genero varchar(40),
descricao varchar(1000),
fkUsuario int,
constraint fk_usuario_lista foreign key (fkUsuario) references usuario(id),
primary key (nome, fkusuario)
);

select * from usuario;
select * from formulario;
select * from questionario;
select * from lista;

select u.nome as nome_usuario, u.email, f.classeformulario as classe_formulario, f.mensagem
from formulario f
join usuario u on f.fkusuario = u.id;

select u.nome nome_usuario, u.email, q.genero1 genêro_top_1, q.genero2 genêro_top_2
from questionario q
join usuario u on q.fkusuario = u.id;

select u.nome nome_usuario, u.email, l.nome nome_do_livro, l.genero genero_do_livro
from lista l
join usuario u on l.fkUsuario = u.id;