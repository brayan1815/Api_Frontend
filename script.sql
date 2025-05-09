drop database if exists validacion;

create database validacion;
use  validacion;

create table generos(
	id_genero int auto_increment,
	genero varchar(10),
	primary key(id_genero));

    create table ciudades(
	id_ciudad int auto_increment,
	ciudad varchar(50),
	primary key(id_ciudad));
    

    create table lenguajes(
	id_lenguaje int auto_increment,
	nombre_lenguaje varchar(30),
	primary key(id_lenguaje));
    

drop table if exists usuarios;

    create table usuarios(
	id int auto_increment,
    documento int unique,
	nombre_usuario varchar(50),
	apellido_usuario varchar (50),
    telefono bigint(10),
    contrasenia varchar(100),
	genero int,
	ciudad int,
	primary key(id),
	foreign key(genero) references generos(id_genero) on delete set null,
	foreign key(ciudad) references ciudades(id_ciudad)on delete set null);
    
    drop table if exists lenguaje_usuario;
	create table lenguaje_usuario(
    id int auto_increment,
    id_usuario int,
    id_lenguaje int,
    primary key(id),
    foreign key(id_usuario) references usuarios(id) on delete set null,
    foreign key(id_lenguaje)references lenguajes(id_lenguaje) on delete set null);		
    
    show tables;
    
    insert into lenguaje_usuario(id_usuario, id_lenguaje) values (2,1);
    select * from usuarios;
    
    SELECT * FROM ciudades WHERE id_ciudad=2;
    
    insert into generos(genero) values("otro");
    
    select * from generos;
    
    insert into usuarios (documento, nombre_usuario, apellido_usuario,telefono,contrasenia,genero,ciudad) values
    (1096512824,"Brayan","Fernandez",3112114081,"brayan123",1,1);
    
    select * from lenguajes;
    
    select * from lenguaje_usuario where id_lenguaje=1 and id_usuario=2;
    
    select * from lenguaje_usuario;
    select * from usuarios;
    
    show tables;
    
    UPDATE lenguaje_usuario SET id_usuario = 3, id_lenguaje = 2 WHERE id = 2;
    
    select * from lenguajes;
    
    SELECT * FROM lenguaje_usuario WHERE id_lenguaje=1;
    