// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    connection: {
      filename: './data/cook_book.db3'
    },
    seeds: {
      directory: "./data/seeds"
    },
    testing: {
      connection: { filename: "./data/cook_book.test.db3" }
    },
    pool: {
      afterCreate: 
      (conn, done) => conn.run("PRAGMA foreign_keys = ON", done)
    }
  },

};

