// this file stores configurations about how to connect
// to the database using Knex

module.exports = {
  development: {
    client: "sqlite3", // database driver
    connection: {
      // the location of the database file
      filename: "./data/produce.db3", // for SQLite only
    },
    useNullAsDefault: true,
    migrations: {
      // where to store the migration files
      directory: "./data/migrations",
    },
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // configuration used on Heroku
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

// Every change to the database should be done through the migrations file
