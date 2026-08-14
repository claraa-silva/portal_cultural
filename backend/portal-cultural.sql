DROP DATABASE IF EXISTS portal;
CREATE DATABASE portal;
USE portal;

CREATE TABLE pais (
    id CHAR(2) NOT NULL PRIMARY KEY, -- norma ISO 3166-1 ALPHA-2
    nome VARCHAR(70) NOT NULL,
    contexto TEXT,
    url_imagem TEXT
);

CREATE TABLE curiosidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    texto TEXT,

    CONSTRAINT fk_curiosidades_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
        ON DELETE CASCADE
);

CREATE TABLE musica (
    id INT NOT NULL PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    nome TEXT,
    link TEXT,
    genero TEXT,

    CONSTRAINT fk_musica_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
        ON DELETE CASCADE
);

CREATE TABLE comida (
    id INT NOT NULL PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    nome TEXT,
    ingredientes TEXT,

    CONSTRAINT fk_comida_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
        ON DELETE CASCADE
);

CREATE TABLE ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_comida INT NOT NULL,
    texto TEXT,

    CONSTRAINT fk_ingredientes_comida
        FOREIGN KEY (id_comida)
        REFERENCES comida(id)
        ON DELETE CASCADE
);

CREATE TABLE expressoes_idiomaticas (
    id INT NOT NULL PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    texto TEXT,
    significado TEXT,
    exemplo TEXT,

    CONSTRAINT fk_expressoes_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
        ON DELETE CASCADE
);

CREATE TABLE exemplos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_expressao INT NOT NULL,
    texto TEXT,

    CONSTRAINT fk_exemplos_expressoes
        FOREIGN KEY (id_expressao)
        REFERENCES expressoes_idiomaticas(id)
        ON DELETE CASCADE
);

CREATE TABLE experiencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    texto TEXT,
    data DATE,

    CONSTRAINT fk_experiencias_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
);

CREATE TABLE dicas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    texto TEXT,

    CONSTRAINT fk_dicas_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
);

CREATE TABLE universidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    nome TEXT,

    CONSTRAINT fk_universidades_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
);

CREATE TABLE destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pais CHAR(2) NOT NULL,
    nome TEXT NOT NULL,
    url_imagem TEXT,
    descricao TEXT,

    CONSTRAINT fk_destinos_pais
        FOREIGN KEY (id_pais)
        REFERENCES pais(id)
);

CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome TEXT NOT NULL,
    loc TEXT,
    epoca TEXT,
    descricao TEXT
);

CREATE TABLE intercambios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pais_id CHAR(2) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    tipo VARCHAR(50) NOT NULL,
    instituicao VARCHAR(150),
    duracao VARCHAR(50),
    custo DECIMAL(10,2),
    moeda CHAR(3),
    bolsa BOOLEAN DEFAULT FALSE,
    nivel_idioma VARCHAR(50),
    idade_minima INT,
    idade_maxima INT,
    imagem_url TEXT,
    link_oficial TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_intercambios_pais
        FOREIGN KEY (pais_id)
        REFERENCES pais(id)
        ON DELETE CASCADE
);

-- INSERTS: PAIS
INSERT INTO pais (id, nome, contexto, url_imagem) VALUES
('UY', 'Uruguai', 'O Uruguai tornou-se independente em 1828, após disputas entre Brasil e Argentina. No início do século XX, destacou-se por reformas sociais avançadas na região. Passou por uma ditadura militar entre 1973 e 1985. Hoje é reconhecido por sua estabilidade democrática e altos índices de desenvolvimento humano na América Latina.', 'uruguai.jpg'),
('AR', 'Argentina', 'A Argentina conquistou sua independência da Espanha em 1816. Durante o século XIX, enfrentou conflitos internos entre federalistas e unitários. No século XX, viveu instabilidade política, incluindo o governo de Juan Domingo Perón e períodos de ditadura militar (1976–1983). Após a redemocratização, consolidou-se como uma das principais economias da América do Sul, apesar de recorrentes crises econômicas.', 'argentina.jpg'),
('PY', 'Paraguai', 'O Paraguai declarou independência em 1811. No século XIX, sofreu grande devastação na Guerra do Paraguai (1864–1870), contra Brasil, Argentina e Uruguai. No século XX, viveu a longa ditadura de Alfredo Stroessner (1954–1989). Desde então, mantém regime democrático, embora com desafios políticos e sociais.', 'paraguai.jpg'),
('BO', 'Bolívia', 'A Bolívia tornou-se independente em 1825, com liderança de Simón Bolívar. Enfrentou diversas guerras e perdeu acesso ao mar na Guerra do Pacífico contra o Chile. Sua história é marcada por instabilidade política e forte presença indígena na identidade nacional. No século XXI, destacou-se o governo de Evo Morales, primeiro presidente indígena do país.', 'bolivia.jpg'),
('PE', 'Peru', 'O Peru foi o centro do Império Inca antes da colonização espanhola. Tornou-se independente em 1821. No século XX, passou por regimes militares e enfrentou o conflito interno contra o grupo guerrilheiro Sendero Luminoso nas décadas de 1980 e 1990. Atualmente, vive instabilidade política frequente, mas mantém regime democrático.', 'peru.jpg'),
('CO', 'Colômbia', 'A Colômbia tornou-se independente em 1810 (consolidada em 1819), também sob influência de Simón Bolívar. Durante o século XX, enfrentou conflitos internos entre governo, guerrilhas (como as FARC) e grupos paramilitares. Em 2016, foi assinado um acordo de paz histórico para encerrar décadas de conflito armado.', 'colombia.jpg'),
('VE', 'Venezuela', 'A Venezuela declarou independência em 1811 e foi peça central nos movimentos liderados por Simón Bolívar. No século XX, destacou-se como grande produtora de petróleo. Desde o final dos anos 1990, passou por profundas transformações políticas com Hugo Chávez e, depois, Nicolás Maduro, enfrentando forte crise econômica, política e migratória.', 'venezuela.jpg');

-- INSERTS: UNIVERSIDADES
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

-- INSERTS: DICAS
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

-- INSERTS: DESTINOS
INSERT INTO destinos (id_pais, nome, url_imagem, descricao) VALUES
('AR', 'Glaciar Perito Moreno', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b5/97/6a/caption.jpg?w=900&h=500&s=1', 'Um dos poucos glaciares ainda em avanço, localizado no Parque Nacional de Los Glaciares'),
('PE', 'Machu Picchu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTeYKgKfyuiNsksQYlTz1OuspUw3sO2LsiipEt8I5Ng&s=10', 'Antiga cidade inca situada nos Andes peruanos, um dos destinos mais icônicos da América do Sul.'),
('CO', 'Cartagena das Índias', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJfsj3MHf4_0hQcMWSjARl8IwV_yn-y0hGBe6LRjGFf0enPe-9NAzoI4H&s=10', 'Cidade colonial murada na costa caribenha da Colômbia, conhecida por suas cores vibrantes e história.'),
('BO', 'Salar de Uyuni', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOZai0kpTxVuvSXF1c3XFzVQVeuwYzvN7Np3ugo1KPw&s=10', 'O maior deserto de sal do mundo, na Bolívia, famoso pelo efeito espelho na época das chuvas.'),
('BO', 'Lago Titicaca', 'https://www.voltologo.net/wp-content/uploads/2015/04/Lago-Titicaca.jpg', 'O Lago Titicaca fica nos Andes, na fronteira entre Peru e Bolívia. A 3.812 metros de altitude, é o lago navegável comercialmente mais alto do mundo e possui grande importância para a cultura inca.'),
('CO', ' Parque Tayrona','https://www.voltologo.net/wp-content/uploads/2015/04/parques-america-latina.jpg', 'Próximo à cidade de Santa Marta, o Parque Tayrona é uma joia no caribe colombiano. O parque possui diversas praias, trilhas e até opções para acampar ou dormir em redes.'),
('CO', 'Barichara', 'https://cdn.assets-casacor.tec.br/file/casacor-images-news/2026/01/giovanny-gomez-perez-jmlilxlyjug-unsplash-etbsei8o.webp', ' Barichara tem ruas de pedra, casas brancas e portas coloridas que compõem um cenário encantador. O ritmo de vida é lento, ideal para caminhadas contemplativas e artesanato.' ),
('AR', 'Tafi del Valle', 'https://cdn.assets-casacor.tec.br/file/casacor-images-news/2026/01/tafi-del-valle-v28armtc.webp', 'Tafi del Valle é um refúgio nas montanhas argentinas. O cenário une vales, lagos e tradições indígenas preservadas. O destino oferece paisagens deslumbrantes e uma vivência rural autêntica.');
-- INSERTS: EVENTOS
INSERT INTO eventos (nome, loc, epoca, descricao) VALUES
('Fiesta de la Vendimia', 'Mendoza, Argentina', 'Entre fevereiro e março', 'Uma celebração da colheita da uva, com desfiles, danças tradicionais e, claro, degustação dos famosos vinhos argentinos.'),
('Inti Raymi', 'Cusco, Peru', 'Junho', 'Conhecido como o Festival do Sol, é uma homenagem ao deus Inca Inti. A festa inclui desfiles históricos e rituais que transportam os visitantes ao passado.'),
('Festival Nacional de Folclore', 'Cosquín, Argentina', 'Entre janeiro e fevereiro', 'Um festival que celebra a música e a dança tradicional argentina, reunindo artistas locais e internacionais.'),
('Festival del Viento y las Cometas', 'Villa de Leyva, Colômbia', 'Agosto', 'Celebração colorida com competições de pipas, que transformam o céu em um espetáculo visual.'),
('Fiesta de la Candelaria', 'Puno, Peru', 'Fevereiro', 'Um evento religioso e cultural que mistura tradições indígenas e católicas, com danças e procissões ao redor do Lago Titicaca.'),
('Carnaval de Oruro', 'Oruro, Bolívia', 'Fevereiro ou março', 'Declarado Patrimônio Imaterial da Humanidade pela UNESCO, o carnaval de Oruro é uma explosão de cores e folclore.');

-- INSERTS: INTERCAMBIOS
INSERT INTO intercambios (pais_id, titulo, descricao, tipo, instituicao, duracao, custo, moeda, bolsa, nivel_idioma) VALUES
('BO', 'Programa UMSA', 'Programa de mobilidade acadêmica.', 'Acadêmico', 'Universidad Mayor de San Andrés', '1 semestre', 0, 'BOB', TRUE, 'B1'),
('CO', 'Programa Internacional', 'Intercâmbio universitário.', 'Acadêmico', 'Universidad Nacional de Colombia', '6 meses', 0, 'COP', TRUE, 'B2'),
('PE', 'Intercâmbio PUCP', 'Programa para estudantes estrangeiros.', 'Acadêmico', 'Pontificia Universidad Católica del Perú', '1 semestre', 3000, 'PEN', FALSE, 'B1');

INSERT INTO intercambios (pais_id, titulo, descricao, tipo, instituicao, duracao, custo, moeda, bolsa, nivel_idioma, idade_minima, idade_maxima, imagem_url, link_oficial) VALUES
-- Argentina
('AR', 'Intercâmbio Acadêmico UBA', 'Estude durante um semestre na Universidad de Buenos Aires.', 'Acadêmico', 'Universidad de Buenos Aires', '6 meses', 0, 'ARS', TRUE, 'B1', 18, 30, 'uba.jpg', 'https://www.uba.ar'),
('AR', 'Curso Intensivo de Espanhol', 'Curso de espanhol para estrangeiros.', 'Idioma', 'Universidad de Morón', '3 meses', 1200, 'USD', FALSE, 'A1', 16, 60, 'moron.jpg', 'https://www.unimoron.edu.ar'),
-- Paraguai
('PY', 'Programa de Mobilidade Acadêmica - Universidad Nacional de Asunción', 'Programa destinado a estudantes universitários interessados em cursar um semestre na principal universidade pública do Paraguai.', 'Graduação', 'Universidad Nacional de Asunción', '1 semestre', 0.00, 'PYG', TRUE, 'Espanhol intermediário', 18, 30, 'una.jpg', 'https://www.una.py'),
('PY', 'Curso Intensivo de Espanhol em Assunção', 'Curso de imersão na língua espanhola com atividades culturais e visitas guiadas.', 'Curso de Idiomas', 'Instituto Cultural Paraguayo', '2 meses', 1800.00, 'PYG', FALSE, 'Básico', 16, 60, 'espanhol-py.jpg', 'https://www.icp.edu.py'),
-- Uruguai
('UY', 'Intercâmbio Acadêmico - Universidad de la República', 'Programa para estudantes estrangeiros realizarem disciplinas durante um semestre letivo.', 'Graduação', 'Universidad de la República', '1 semestre', 0.00, 'UYU', TRUE, 'Espanhol intermediário', 18, 35, 'udelar.jpg', 'https://udelar.edu.uy'),
('UY', 'Curso de Espanhol e Cultura Uruguaia', 'Curso voltado para estudantes internacionais interessados na cultura e idioma do Uruguai.', 'Curso de Idiomas', 'Universidad ORT Uruguay', '3 meses', 1200.00, 'UYU', FALSE, 'Básico', 16, 60, 'ort.jpg', 'https://www.ort.edu.uy'),
-- Venezuela
('VE', 'Programa de Mobilidade - Universidad Central de Venezuela', 'Programa acadêmico voltado para intercâmbio universitário em diversas áreas do conhecimento.', 'Graduação', 'Universidad Central de Venezuela', '1 semestre', 0.00, 'VES', TRUE, 'Espanhol avançado', 18, 35, 'ucv.jpg', 'https://www.ucv.ve'),
('VE', 'Curso de Espanhol para Estrangeiros', 'Curso intensivo de língua espanhola com foco em comunicação e cultura venezuelana.', 'Curso de Idiomas', 'Instituto de Idiomas de Caracas', '10 semanas', 900.00, 'VES', FALSE, 'Básico', 16, 60, 'idiomas-ve.jpg', 'https://www.ucv.ve');


SELECT * FROM pais;
SELECT * FROM dicas;
SELECT * FROM experiencias;
SELECT * FROM universidades;
SELECT * FROM intercambios;
SELECT * FROM destinos;
SELECT * FROM eventos;