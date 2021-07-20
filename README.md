# Instruções

## Banco de dados

Utilizado Docker para rodar o banco de dados Postgres com o comando abaixo:

    docker run --name pg-docker -e POSTGRES_PASSWORD=docker -e PGDATA=/tmp -d -p 5432:5432 -v ${PWD}:/var/lib/postgresql/data postgres:11

//TODO
Adicionar comando para criar o banco de dados

## API - Inicial

No terminal, navegue até a pasta da API e digite o comando abaixo para instalar os pacotes:

    npm install

Ou

    yarn

## API - Migrations

Para rodar os migrations da API basta digitar no terminal:

    yarn sequelize db:migrate

## API - Testes

Para rodar os testes da API basta digitar no terminal:

    yarn test

## API - Rodar projeto

Para rodar o projeto da API basta digitar no terminal:

    yarn dev