# Boilerplate Wordpress

Projeto Inicial para construção de sites e blogs em Wordpress com Docker e Docker Compose.
Exemplos de utilização de [Block Editor](https://developer.wordpress.org/block-editor/) e [Full Site Editing (FSE)](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/)

```Importante:```

- ```DP_DEBUG=false nos ambientes de produção e staging```
- ```WP_DEFAULT_PASSWORD é a senha padrão do último dump```

## Requerimentos

- Docker
- Docker Compose
- Acesso ao Digital Ocean da Raccoon
- Terraform

## Ambiente local

### Configure o arquivo .env

- Copie o arquivo .env.example e renomeie para .env
- Configure as variáveis de acordo com o seu contexto

### Iniciando os containers

Para começar o desenvolvimento local, basta executar o seguintes comandos no diretório do projeto:

- `docker-compose up -d --build`
- `bash bash/setup`

Se você estiver usando um Mac, defina a variável no .env:

- `DB_PLATFORM=linux/x86_64`

Caso contrário:

- `DB_PLATFORM=""`

- Lembre-se de checar se seu sistema tem o Docker e Docker Compose instalado.
- Certifique que não há nenhum processo utilizando as portas 80 (apache), 8081 (phpmyadmin) e 3306 (mysql)

Em seguida navegue para o diretório themes/raccoon-blocks e execute os seguintes comandos para começar o desenvolvimento:
    `yarn`
    `yarn dev`

### Importando banco de dados

- ```chmod a+x db``` para dar permissão de executar o shell script db
- ```bash/db load``` para carregar o último dump do mysql localizado em */data/mysql*
- ```bash/db save``` para salar o banco

## Deploy via Terraform no Digital Ocean

- Instalar Terraform
- Descomentar o trecho *DB DIGITAL OCEAN* do arquivo .env
- Criar um Personal Token no Digital Ocean
- ```cd configs/terraform```
- ```terraform init```
- ```terraform apply```
- ```yes```
- Acesse o App no Digital Ocean e mude a variável de ambiente *SITE_URL* para a url que o DO gerou

### Criando o Droplet

- Acesse <https://cloud.digitalocean.com/>
- Crie um Droplet Docker do Marketplace
- Cadastre suas infos na seguinte planilha: https://docs.google.com/spreadsheets/d/1CktRZSvPf3txBtlNKZUsn12NGcB9IhbX8PsTKFBlQ9A/edit#gid=0

```ATENÇÃO: Quando o projeto terminar remova o droplet, pois eles geram custo```

### Configurando repositório no Digital Ocean

- Acesse o console do Droplet criado
- Crie uma chave com o comando ```ssh-keygen```
- Depois de criar a chave, execute ```cat /root/.ssh/id_rsa.pub``` e copie a chave pública gerada
- Acesse o github e cadastre a chave SSH no seu perfil (Configurações)
- No console do Droplet, clone o repositório
- Na pasta do repositório execute: ```docker-compose up -d```
- Em seguida carregue o banco: ```bash/db load```
- Em seguida: ```bash/setup```

### Configurando Dominio

- Acesse o <https://cloud.digitalocean.com/>
- No menu lateral: Networking > Domains > raccoon-stage.com
- Crie um registro do tipo A com os seguintes parametros:
  - HOSTNAME: subdominio (ex. clientex.raccoon-stage.com, o hostname será clientex)
  - WILL DIRECT TO: ip do droplet
  - Não esqueça de remover o registro quando o projeto acabar (cleanup)
- Altere o Site URL no wp-admin

### Configurando SSL

- Acesse o Droplet
- Veja a listagem dos containers: `docker ps`
- Copie o ID do container que utiliza a porta 80/443
- Inicie o Bash via docker exec: `docker exec -it [id do container] bash`
- Execute o comando `certbot` e siga o wizard:
  - Copie os arquivos ssl para o volume /ssl:
    - `cp -f /etc/letsencrypt/archive/*/fullchain1.pem /ssl/fullchain.pem`
    - `cp -f /etc/letsencrypt/archive/*/privkey1.pem /ssl/privkey.pem`

## Erros comuns

- Erro 413 ao tentar importar arquivo All-in-One :
  - Execute o seguinte comando `docker ps` e pegue os 4 primeiros dígitos do container do apache recém instalado.
  - Execute o seguinte comando `docker exec -it ID_CONTAINER bash` trocando `ID_CONTAINER` pelos dígitos do container apache que está ocorrendo o erro.
  - E por fim execute o seguinte comando ainda dentro do container `service apache2 restart` e tente subir novamente o arquivo.

