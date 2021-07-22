Olá! Eu sou a Lumitcha e esse é meu projeto de estudos.

# Instruções

## Banco de dados

Utilizado Docker para rodar o banco de dados Postgres com o comando abaixo:

    docker run --name pg-docker -e POSTGRES_PASSWORD=docker -e PGDATA=/tmp -d -p 5432:5432 -v ${PWD}:/var/lib/postgresql/data postgres:11


E para criar o banco de dados utilize o comando abaixo:

    docker exec -it pg-docker psql -U postgres -c "CREATE DATABASE lartemis;"

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

## Web - Inicial

No terminal, navegue até a pasta do projeto Web e digite o comando abaixo para instalar os pacotes:

    npm install

Ou

    yarn

## Web - Rodar projeto

Para rodar o projeto Web basta digitar no terminal:

    yarn start


**Nota: É importante que os projetos de API e Web estejam rodando juntos.**

## Documentação da API

Comecei a ajustar a documentação da API que se encontra em:

    http://localhost:3333/docs/

# Próximos passos

- Ainda não consegui implementar que a lista de alertas utilize Associations ao invés da Raw Query como está utilizando hoje;
- Após isso, pretendo colocar a paginação da lista na API e Web;
- Após isso também pretendo ajustar a documentação da API que não está funcionando corretamente ainda;
- Adicionar testes no projeto Web;
- Estudar o que posso melhorar nos dois projetos;
