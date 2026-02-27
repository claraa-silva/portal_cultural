drop database if exists portal;
create database portal;
use portal;

create table pais(
	id int not null primary key,
    nome varchar(70) not null,
    contexto text,
    mapa text
);

create table curiosidades(
	id int not null auto_increment primary key,
    id_pais int not null,
    texto text,
    
	constraint fk_id_pais_curiosidade foreign key (id_pais) references pais(id) on delete cascade
);

create table musica(
	id int not null primary key,
    id_pais int not null,
    nome text,
    link text,
    genero text,
    
    constraint fk_id_pais foreign key (id_pais) references pais(id) on delete cascade
);

create table comida(
	id int not null primary key,
    id_pais int not null,
    nome text,
    ingredientes text,
    
    constraint fk_id_pais_comida foreign key (id_pais) references pais(id) on delete cascade
);

create table ingredientes(
	id int not null auto_increment primary key,
    id_comida int not null,
    texto text,
    
	constraint fk_id_comida_ingredientes foreign key (id_comida) references comida(id) on delete cascade
);

create table expressoes_idiomaticas(
	id int not null primary key,
    id_pais int not null,
    texto text,
    significado text,
    exemplo text,
    
    constraint fk_id_pais_expressoes foreign key (id_pais) references pais(id) on delete cascade
);

create table exemplos(
	id int not null auto_increment primary key,
    id_expressao int not null,
    texto text,
    
	constraint fk_id_expressao foreign key (id_expressao) references expressoes_idiomaticas(id) on delete cascade
);