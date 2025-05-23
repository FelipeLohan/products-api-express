# 🛍️ **API de Produtos e Categorias**

Este projeto é uma **API RESTful** construída com **Node.js** e **MongoDB** para gerenciar produtos e categorias em um sistema de e-commerce. Ele oferece funcionalidades para cadastrar, atualizar, listar e excluir produtos e categorias.

## 🚀 **Tecnologias Utilizadas**

- **Node.js** - Ambiente de execução para JavaScript no servidor
- **Express.js** - Framework para construção de APIs
- **MongoDB** - Banco de dados NoSQL para armazenamento dos dados
- **Mongoose** - Biblioteca ODM para MongoDB
- **TypeScript** - Superset do JavaScript com tipagem estática

## 🔧 **Instalação e Execução**

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Passo 1: Clonar o repositório

```bash
git clone git@github.com:FelipeLohan/products-api-express.git
```

### Passo 2: Instalar as dependências

```bash
cd products-api-express
npm install
```

### Passo 3: Criar o arquivo `.env`

Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias (como a conexão com o MongoDB).

### Passo 4: Iniciar o servidor

```bash
npm run start
```

A API estará disponível em `http://localhost:3000`.

## 🛠️ **Endpoints**

### **Categorias**

* **GET** `/v1/api/categories` - Retorna todas as categorias
* **GET** `/v1/api/categories/:id` - Retorna uma categoria específica
* **POST** `/v1/api/categories` - Cria uma nova categoria
* **PUT** `/v1/api/categories/:id` - Atualiza uma categoria existente
* **DELETE** `/v1/api/categories/:id` - Exclui uma categoria

### **Produtos**

* **GET** `/v1/api/products` - Retorna todos os produtos
* **GET** `/v1/api/products/:id` - Retorna um produto específico
* **POST** `/v1/api/products` - Cria um novo produto
* **PUT** `/v1/api/products/:id` - Atualiza um produto existente
* **DELETE** `/v1/api/products/:id` - Exclui um produto

## 🔐 **Tratamento de Erros**

A API utiliza uma classe personalizada de erro (`CustomError`) para facilitar o tratamento de erros e oferecer respostas mais amigáveis para os usuários.

### Exemplo de erro:

```json
{
  "message": "fail",
  "status": 404,
  "description": "This id is invalid"
}
```

## 📝 **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).

## 🤝 **Contribuindo**

Se você deseja contribuir com este projeto, fique à vontade para enviar um pull request ou abrir uma issue.
