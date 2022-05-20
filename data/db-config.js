// which env to use is decided here

const knex = require("knex")

const configurations = require("../knexfile")

const environment = process.env.NODE_ENV

module.exports = knex(configurations[environment])