

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: 6000,
      // parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username:"postgres",
      password:`Skazi2020`,
      databaseName:"gis"
    }
  });