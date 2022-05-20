// which env to use is decided here

const knex = require("knex")

const config = require("../knexfile")

const environment = process.env.NODE_ENV

module.exports = knex(config)