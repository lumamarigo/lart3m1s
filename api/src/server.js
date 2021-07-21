const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Lart3m1s',
      version: '1.0.0',
      description:
        'Projeto de estudo da Lumitcha',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'JSONPlaceholder',
        url: 'https://jsonplaceholder.typicode.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development server',
      },
    ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

var corsOptions = {
    origin: 'http://localhost:3000'
};
require('./database');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3333);