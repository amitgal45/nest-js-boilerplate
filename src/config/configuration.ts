

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username:"postgres",
      password:`1235789`,
      databaseName:"Postgres14"
    }
  });