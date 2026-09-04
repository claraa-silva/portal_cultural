## Sobre o Projeto

O **Portal Cultural** é uma plataforma desenvolvida para estudantes brasileiros em mobilidade internacional, com o objetivo de facilitar o contato, a compreensão e a descoberta da cultura dos países hispanofalantes.

A plataforma reúne conteúdos sobre cultura, música, gastronomia, expressões idiomáticas, curiosidades, mapas interativos e oportunidades acadêmicas, contribuindo para a preparação e a experiência dos estudantes durante sua mobilidade.

---

## Objetivo

O projeto busca funcionar como um espaço de consulta e descoberta cultural, ajudando estudantes brasileiros a conhecer melhor os costumes, a língua e a diversidade cultural dos países e regiões de língua espanhola.

Além dos conteúdos culturais, o portal disponibiliza informações relacionadas a:
* **Bolsas de estudo**
* **Projetos e oportunidades acadêmicas**
* **Mobilidade internacional**
* **Conteúdos úteis para estudantes**
* **Países e regiões hispanofalantes**

---

## Público-Alvo

O Portal Cultural é voltado principalmente para:
* Estudantes brasileiros em mobilidade internacional;
* Estudantes que pretendem realizar intercâmbio em países hispanofalantes;
* Pessoas interessadas na cultura dos países de língua espanhola;
* Estudantes que buscam informações sobre oportunidades de mobilidade, bolsas e projetos.

---

## Conteúdos Disponíveis

A plataforma reúne diferentes tipos de conteúdos culturais e acadêmicos:
* Mapas interativos
* Informações culturais
* Músicas
* Gastronomia
* Expressões idiomáticas
* Curiosidades
* Informações sobre países e regiões hispanofalantes
* Bolsas de estudo
* Projetos e oportunidades para estudantes em mobilidade

---

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:
* **Front-end:** HTML5, CSS3, JavaScript
* **Back-end:** Node.js
* **Banco de Dados:** MySQL
* **Ferramenta de Gerenciamento:** MySQL Workbench 8.0 CE

---

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

### 1. Clone o repositório
```bash
git clone "https://github.com/claraa-silva/portal_cultural.git"
cd portal_cultural
````

### 2. Configuração do Banco de Dados

O Portal Cultural utiliza MySQL para armazenamento e gerenciamento dos dados da aplicação.

### Instalação

Certifique-se de ter o MySQL instalado em sua máquina.

Para visualizar e gerenciar o banco de dados, recomendamos o uso do MySQL Workbench 8.0 CE.

O projeto possui um arquivo SQL contendo a estrutura do banco. Importe-o pelo MySQL Workbench ou execute-o diretamente pelo terminal.

```sql
USE portal_cultural;
````

## 3. Configuração da conexão com o banco

No Back-end, configure as informações de acesso ao MySQL.

### Exemplo

```text
Host: localhost
Porta: 3307
Banco de dados: portal_cultural
Usuário: root
Senha: password
````

## Executando o Back-end

Entre na pasta do Back-end:

```bash
cd backend
npm install
node index.js
````

Após a inicialização, o terminal exibirá o endereço para acessar a aplicação.

Geralmente, o projeto pode ser acessado em:
```
http://localhost:3000
````

Mantenha esse terminal aberto enquanto o Back-end estiver em execução.

## Executando o Front-end

Abra outro terminal e volte para a pasta principal:

```bash
cd ..
````

Entre na pasta do Front-end:
```
cd frontend
````

Instale as dependências:
```
npm install
````

Execute o projeto em modo de desenvolvimento:
```
npm run dev
````

Após a inicialização, o terminal exibirá o endereço para acessar a aplicação.

Geralmente, o projeto pode ser acessado em:
```
http://localhost:3000
````
## Comandos disponíveis

| Comando | Descrição |
|---|---|
| `git clone` | Clona o repositório para o computador |
| `npm install` | Instala as dependências do projeto |
| `node index.js` | Inicia o Back-end |
| `npm run dev` | Inicia o Front-end em modo de desenvolvimento |

## Estrutura do projeto

A estrutura principal do projeto é organizada da seguinte forma:

```text
portal_cultural/
├── backend/
│   ├── ...
│   └── index.js
│
├── frontend/
│   ├── ...
│   └── ...
│
├── .gitignore
├── banco.sql
└── README.md
````

## Sobre o projeto

O Portal Cultural foi desenvolvido com foco em estudantes brasileiros que participam ou pretendem participar de programas de mobilidade internacional em países hispanofalantes.

A plataforma busca aproximar os estudantes da cultura dos países de língua espanhola por meio de conteúdos informativos e recursos interativos.

O projeto também disponibiliza informações sobre bolsas, projetos e oportunidades acadêmicas, auxiliando os estudantes em diferentes etapas de sua experiência internacional.
