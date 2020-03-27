const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para alterar ou criar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
 * NoSQL: MongoDB, CouchDB e etc..
 */

/**
 * Driver: SELECT * FROM users.
 * Query Builder: table('users').select('*').where()
 */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(3333);