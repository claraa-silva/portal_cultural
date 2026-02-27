drop database if exists portal;
create database portal;
use portal;

create table pais(
	id char(2) not null primary key, # norma ISO 3166-1 ALPHA-2
    nome varchar(70) not null,
    contexto text,
    mapa text
);

create table curiosidades(
	id int not null auto_increment primary key,
    id_pais char(2) not null,
    texto text,
    
	constraint fk_id_pais_curiosidade foreign key (id_pais) references pais(id) on delete cascade
);

create table musica(
	id int not null primary key,
    id_pais char(2) not null,
    nome text,
    link text,
    genero text,
    
    constraint fk_id_pais foreign key (id_pais) references pais(id) on delete cascade
);

create table comida(
	id int not null primary key,
    id_pais char(2) not null,
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
    id_pais char(2) not null,
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

# inserts - país
INSERT INTO pais (id, nome, contexto) VALUES ("UY", 'Uruguai', "O Uruguai tornou-se independente em 1828, após disputas entre Brasil e Argentina. No início do século XX, destacou-se por reformas sociais avançadas na região. Passou por uma ditadura militar entre 1973 e 1985. Hoje é reconhecido por sua estabilidade democrática e altos índices de desenvolvimento humano na América Latina.");
INSERT INTO pais (id, nome, contexto) VALUES ("AR", 'Argentina', "A Argentina conquistou sua independência da Espanha em 1816. Durante o século XIX, enfrentou conflitos internos entre federalistas e unitários. No século XX, viveu instabilidade política, incluindo o governo de Juan Domingo Perón e períodos de ditadura militar (1976–1983). Após a redemocratização, consolidou-se como uma das principais economias da América do Sul, apesar de recorrentes crises econômicas.");
INSERT INTO pais (id, nome, contexto) VALUES ("PY", 'Paraguai', "O Paraguai declarou independência em 1811. No século XIX, sofreu grande devastação na Guerra do Paraguai (1864–1870), contra Brasil, Argentina e Uruguai. No século XX, viveu a longa ditadura de Alfredo Stroessner (1954–1989). Desde então, mantém regime democrático, embora com desafios políticos e sociais.");
INSERT INTO pais (id, nome, contexto) VALUES ("BO", 'Bolivia', "A Bolívia tornou-se independente em 1825, com liderança de Simón Bolívar. Enfrentou diversas guerras e perdeu acesso ao mar na Guerra do Pacífico contra o Chile. Sua história é marcada por instabilidade política e forte presença indígena na identidade nacional. No século XXI, destacou-se o governo de Evo Morales, primeiro presidente indígena do país.");
INSERT INTO pais (id, nome, contexto) VALUES ("PE", 'Peru', "O Peru foi o centro do Império Inca antes da colonização espanhola. Tornou-se independente em 1821. No século XX, passou por regimes militares e enfrentou o conflito interno contra o grupo guerrilheiro Sendero Luminoso nas décadas de 1980 e 1990. Atualmente, vive instabilidade política frequente, mas mantém regime democrático.");
INSERT INTO pais (id, nome, contexto) VALUES ("CO", 'Colômbia', "A Colômbia tornou-se independente em 1810 (consolidada em 1819), também sob influência de Simón Bolívar. Durante o século XX, enfrentou conflitos internos entre governo, guerrilhas (como as FARC) e grupos paramilitares. Em 2016, foi assinado um acordo de paz histórico para encerrar décadas de conflito armado.");
INSERT INTO pais (id, nome, contexto) VALUES ("VE", 'Venezuela', "A Venezuela declarou independência em 1811 e foi peça central nos movimentos liderados por Simón Bolívar. No século XX, destacou-se como grande produtora de petróleo. Desde o final dos anos 1990, passou por profundas transformações políticas com Hugo Chávez e, depois, Nicolás Maduro, enfrentando forte crise econômica, política e migratória.");

select * from pais; 