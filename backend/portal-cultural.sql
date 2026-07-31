drop database if exists portal;
create database portal;
use portal;

create table pais(
	id char(2) not null primary key, # norma ISO 3166-1 ALPHA-2
    nome varchar(70) not null,
    contexto text,
    url_imagem text
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
    
    constraint fk_id_pais_mus foreign key (id_pais) references pais(id) on delete cascade
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
    texto text,
    significado text,
    exemplo text
);

create table exemplos(
	id int not null auto_increment primary key,
    id_expressao int not null,
    texto text,
    
	constraint fk_id_expressao foreign key (id_expressao) references expressoes_idiomaticas(id) on delete cascade
);
create table experiencias(
	id INT AUTO_INCREMENT,
    id_pais char(2) not null,
    texto text,
    data date,
    primary key(id),
    
    constraint fk_id_pais_exp foreign key (id_pais) references pais(id)
);

create table dicas(
	id int auto_increment,
    id_pais char(2) not null,
    texto text,
    primary key(id),
    
    constraint fk_id_pais_dicas foreign key (id_pais) references pais(id)
);

create table universidades(
	id INT AUTO_INCREMENT,
    id_pais char(2) not null,
    nome text,
    primary key(id),
    
    constraint fk_id_pais_unis foreign key (id_pais) references pais(id)
);

create table destinos(
	id int auto_increment primary key,
    id_pais char(2) not null,
    nome text,
    constraint fk_id_pais_destinos foreign key (id_pais) references pais(id)
);

# inserts - país
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("UY", 'Uruguai', "O Uruguai tornou-se independente em 1828, após disputas entre Brasil e Argentina. No início do século XX, destacou-se por reformas sociais avançadas na região. Passou por uma ditadura militar entre 1973 e 1985. Hoje é reconhecido por sua estabilidade democrática e altos índices de desenvolvimento humano na América Latina.", "uruguai.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("AR", 'Argentina', "A Argentina conquistou sua independência da Espanha em 1816. Durante o século XIX, enfrentou conflitos internos entre federalistas e unitários. No século XX, viveu instabilidade política, incluindo o governo de Juan Domingo Perón e períodos de ditadura militar (1976–1983). Após a redemocratização, consolidou-se como uma das principais economias da América do Sul, apesar de recorrentes crises econômicas.", "argentina.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("PY", 'Paraguai', "O Paraguai declarou independência em 1811. No século XIX, sofreu grande devastação na Guerra do Paraguai (1864–1870), contra Brasil, Argentina e Uruguai. No século XX, viveu a longa ditadura de Alfredo Stroessner (1954–1989). Desde então, mantém regime democrático, embora com desafios políticos e sociais.", "paraguai.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("BO", 'Bolivia', "A Bolívia tornou-se independente em 1825, com liderança de Simón Bolívar. Enfrentou diversas guerras e perdeu acesso ao mar na Guerra do Pacífico contra o Chile. Sua história é marcada por instabilidade política e forte presença indígena na identidade nacional. No século XXI, destacou-se o governo de Evo Morales, primeiro presidente indígena do país.", "bolivia.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("PE", 'Peru', "O Peru foi o centro do Império Inca antes da colonização espanhola. Tornou-se independente em 1821. No século XX, passou por regimes militares e enfrentou o conflito interno contra o grupo guerrilheiro Sendero Luminoso nas décadas de 1980 e 1990. Atualmente, vive instabilidade política frequente, mas mantém regime democrático.", "peru.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("CO", 'Colômbia', "A Colômbia tornou-se independente em 1810 (consolidada em 1819), também sob influência de Simón Bolívar. Durante o século XX, enfrentou conflitos internos entre governo, guerrilhas (como as FARC) e grupos paramilitares. Em 2016, foi assinado um acordo de paz histórico para encerrar décadas de conflito armado.", "colombia.jpg");
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES ("VE", 'Venezuela', "A Venezuela declarou independência em 1811 e foi peça central nos movimentos liderados por Simón Bolívar. No século XX, destacou-se como grande produtora de petróleo. Desde o final dos anos 1990, passou por profundas transformações políticas com Hugo Chávez e, depois, Nicolás Maduro, enfrentando forte crise econômica, política e migratória.", "venezuela.jpg");

INSERT INTO universidades (id_pais, nome) VALUES
-- Argentina
('AR', 'Universidad de Buenos Aires'),
('AR', 'Universidad Nacional de La Plata'),
('AR', 'Universidad Nacional de Rosario'),
('AR', 'Universidad Nacional de Misiones'),
('AR', 'Universidad de Morón'),

-- Bolívia
('BO', 'Universidad de Aquino Bolivia'),
('BO', 'Universidad Mayor de San Andrés'),
('BO', 'Universidad Autónoma Gabriel René Moreno'),

-- Colômbia
('CO', 'Universidad Nacional de Colombia'),
('CO', 'Universidad de Antioquia'),
('CO', 'Pontificia Universidad Javeriana'),

-- Paraguai
('PY', 'Universidad Nacional de Asunción'),
('PY', 'Universidad Politécnica y Artística del Paraguay'),
('PY', 'Universidad Sudamericana'),
('PY', 'Universidad Autónoma de San Sebastián'),

-- Peru
('PE', 'Universidad Nacional Mayor de San Marcos'),
('PE', 'Pontificia Universidad Católica del Perú'),
('PE', 'Universidad Peruana Cayetano Heredia'),

-- Uruguai
('UY', 'Universidad de la República'),
('UY', 'Universidad ORT Uruguay'),
('UY', 'Universidad Católica del Uruguay'),

-- Venezuela
('VE', 'Universidad Central de Venezuela'),
('VE', 'Universidad de Los Andes'),
('VE', 'Universidad Simón Bolívar');

INSERT INTO dicas (id_pais, texto) VALUES
('AR', 'Experimente cumprimentar as pessoas com "Hola" e "Gracias". Os argentinos valorizam a cordialidade.'),
('AR', 'Leve pesos argentinos ou um cartão internacional para facilitar os pagamentos.'),

('BO', 'Em regiões de grande altitude, como La Paz, beba bastante água e evite esforços físicos no primeiro dia.'),
('BO', 'Tenha dinheiro em espécie, pois muitos pequenos estabelecimentos não aceitam cartões.'),

('PY', 'Em cidades de fronteira, compare os preços antes de comprar, pois eles podem variar bastante.'),
('PY', 'Leve documentos de identificação sempre com você durante a viagem.'),

('UY', 'Os uruguaios costumam ser muito educados; um simples "Buenos días" faz diferença.'),
('UY', 'Verifique se seu cartão internacional está habilitado para compras no exterior.'),

('PE', 'Ao visitar cidades de altitude, faça refeições leves nos primeiros dias.'),
('PE', 'Aprender expressões simples em espanhol facilita bastante a comunicação.'),

('CO', 'Evite exibir objetos de valor em locais muito movimentados.'),
('CO', 'Use aplicativos de transporte conhecidos quando possível.'),

('VE', 'Verifique as condições de entrada no país e leve todos os documentos exigidos.'),
('VE', 'Tenha um plano para troca de moeda antes da viagem.');

INSERT INTO destinos (id_pais, nome) VALUES
('AR', 'Glaciar Perito Moreno'),
('PE', 'Machu Picchu');

INSERT INTO expressoes_idiomaticas (id, texto, significado) VALUES
(1, 'Más vale tarde que nunca', 'Antes tarde do que nunca'),
(2, 'Estar en las nubes', 'Estar distraído, com a cabeça no mundo da lua'),
(3, 'A lo hecho, pecho', 'O que está feito, está feito; encarar as consequências'),
(4, 'Meter la pata', 'Cometer uma gafe, pisar na bola'),
(5, 'Ser pan comido', 'Ser muito fácil'),
(6, 'No tener pelos en la lengua', 'Falar sem rodeios, ser direto'),
(7, 'Costar un ojo de la cara', 'Ser muito caro'),
(8, 'Estar sin blanca', 'Estar sem dinheiro, estar quebrado'),
(9, 'Dormirse en los laureles', 'Acomodar-se após conquistar algo'),
(10, 'Dar en el clavo', 'Acertar em cheio'),
(11, 'Estar hecho polvo', 'Estar muito cansado, exausto'),
(12, 'Hacerse la vista gorda', 'Fingir que não vê, fazer vista grossa'),
(13, 'Estar de mala leche', 'Estar de mau humor'),
(14, 'Llevarse como el perro y el gato', 'Viver brigando, como cão e gato'),
(15, 'Ser un cero a la izquierda', 'Não ter importância, ser irrelevante'),
(16, 'No pegar ojo', 'Não conseguir dormir'),
(17, 'Ser uña y carne', 'Ser muito próximo, inseparável'),
(18, 'A otro perro con ese hueso', 'Não cair nessa, não acreditar'),
(19, 'Estar como una cabra', 'Ser meio maluco, excêntrico'),
(20, 'Ahogarse en un vaso de agua', 'Fazer tempestade em copo d''água'),
(21, 'Quedarse de piedra', 'Ficar chocado, paralisado de surpresa'),
(22, 'Tirar la toalla', 'Desistir, jogar a toalha'),
(23, 'Ponerse las pilas', 'Se esforçar, ficar mais ativo'),
(24, 'Ser la oveja negra', 'Ser a ovelha negra da família ou grupo'),
(25, 'No tener dos dedos de frente', 'Ser pouco inteligente, sem juízo'),
(26, 'Estar con el alma en vilo', 'Estar ansioso, preocupado'),
(27, 'Estar entre la espada y la pared', 'Estar numa situação difícil, sem saída'),
(28, 'Hacer borrón y cuenta nueva', 'Deixar o passado para trás, recomeçar'),
(29, 'Buscarle tres pies al gato', 'Complicar as coisas desnecessariamente'),
(30, 'Más vale pájaro en mano que ciento volando', 'Melhor um pássaro na mão do que dois voando'),
(31, 'No tener ni un peso', 'Estar sem dinheiro, quebrado'),
(32, 'Estar frito', 'Estar em apuros, sem saída'),
(33, 'Hacerse pato', 'Fingir que não entende, enrolar'),
(34, 'Ponerse la camiseta', 'Vestir a camisa, se comprometer de verdade'),
(35, 'Tirar la onda', 'Flertar, paquerar'),
(36, 'Echar la mano', 'Ajudar alguém'),
(37, 'Dar palo', 'Criticar fortemente, dar bronca'),
(38, 'Estar hasta las narices', 'Estar de saco cheio'),
(39, 'Estar de malas pulgas', 'Estar de mau humor'),
(40, 'Hacerse bolas', 'Se confundir, se enrolar'),
(41, 'Estar al tiro', 'Estar atento, esperto'),
(42, 'Sacar la vuelta', 'Evitar responsabilidades, enrolar'),
(43, 'Llevar la contra', 'Contrariar alguém'),
(44, 'Ir al grano', 'Ir direto ao ponto'),
(45, 'Ser harina de otro costal', 'Ser outro assunto, não ter relação'),
(46, 'Estar pintado', 'Não ser levado em conta, estar ignorado'),
(47, 'No dar bola', 'Não dar atenção, ignorar'),
(48, 'Ser macanudo', 'Ser muito legal, gente boa'),
(49, 'Hacerse el vivo', 'Fingir esperteza, querer se aproveitar'),
(50, 'Mandarse una macana', 'Fazer besteira'),
(51, 'Estar chiflado', 'Ser meio maluco'),
(52, 'Estar reventado', 'Estar exausto'),
(53, 'Hacerse la chancha renga', 'Se fazer de desentendido'),
(54, 'Poner los cuernos', 'Trair o parceiro(a)'),
(55, 'Estar aguado', 'Estar sem energia, fraco'),
(56, 'Echar un polvo', 'Ter relação sexual (coloquial)'),
(57, 'Hablar paja', 'Falar besteira, enrolar'),
(58, 'Estar chineado', 'Estar mimado, cheio de atenção');

select * from pais; 
select * from dicas;
select * from experiencias;
select * from universidades;


