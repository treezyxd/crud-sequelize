module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'crud-sequelize',
  define: {
    timestamp: true,
    underscored: true
  }
}