Banco de dados

Utilizado Docker para rodar o banco de dados Postgres com o comando abaixo:

docker run --name pg-docker -e POSTGRES_PASSWORD=docker -e PGDATA=/tmp -d -p 5432:5432 -v ${PWD}:/var/lib/postgresql/data postgres:11
