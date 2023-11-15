# MedNews - Documentação do Projeto

## Visão Geral do Projeto:
O projeto MedNews é um blog de notícias especializado em saúde, medicina e enfermagem. O objetivo principal é fornecer informações relevantes e atualizadas para profissionais da área e público em geral interessado em tópicos relacionados à saúde. O sistema é construído utilizando Node.js para o backend, Express.js como framework web, e MongoDB como banco de dados para armazenar informações sobre postagens, autores e comentários.

## Tecnologias Utilizadas:
O projeto MedNews utiliza as seguintes tecnologias:

Node.js: Plataforma de execução de JavaScript assíncrona orientada a eventos, projetada para criar aplicativos de rede escaláveis.

Express.js: Framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.

MongoDB: Banco de dados NoSQL orientado a documentos, utilizado para armazenar e recuperar dados relacionados a postagens, autores e comentários.

## Estrutura do Projeto:
A estrutura do projeto MedNews é organizada da seguinte forma:

/src: Contém o código-fonte do projeto.
/models: Define os modelos de dados utilizando o Mongoose para Post, Author, Comment, etc.
/routes: Define as rotas da aplicação utilizando o Express.js.
/controllers: Contém os controladores que manipulam as requisições HTTP.
/views: Armazena os arquivos de visualização (se aplicável).
/config: Configurações do projeto, como a conexão com o banco de dados.
## Configuração do Ambiente:
Antes de iniciar o projeto, certifique-se de ter o Node.js e o MongoDB instalados em sua máquina. Você pode instalar as dependências do projeto utilizando o seguinte comando:

1- Para configurar o ambiente de desenvolvimento, execute o script "npm install" no terminal na raiz do projeto. Isso
2- Para configurar o ambiente de desenvolvimento, você precisará ter o MongoDB instalado em seu computador local ou no servidor

#### bash
npm install

## Execução do Projeto:
Para iniciar o servidor, utilize o seguinte comando:

### bash

npm start

O servidor estará disponível em http://localhost:3333 por padrão. Certifique-se de ajustar as configurações de porta conforme necessário.

### Uso da API:
A API do MedNews permite a criação, leitura, atualização e exclusão de postagens, autores e comentários. Consulte a documentação da API para obter detalhes sobre as rotas disponíveis e os formatos de dados esperados.

7. Contribuição:
Se desejar contribuir para o projeto, sinta-se à vontade para abrir problemas (issues) ou enviar pull requests. Toda contribuição é bem-vinda!

### Licença:
MedNews é licenciado sob a [Licença MIT](https://github.com/franciscojoaopedro/mednews
