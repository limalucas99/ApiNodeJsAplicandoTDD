module.exports = {
  test: {
    client: 'pg',
    version: '14',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Lucas@36',
      database: 'barriga',
    },
  },
  migrations: {
    directory: 'src/migrations',
  },
  seeds: {
    directory: 'src/seeds',
  },
};
