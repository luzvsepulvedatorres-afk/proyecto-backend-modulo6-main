const { Sequelize, DataTypes } = require('sequelize');
// Ajusta la ruta de tu base de datos SQLite si es necesario
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' 
});

const User = sequelize.define('User', {
  // tus campos de usuario aquí (nombre, email, password, etc.)
});

module.exports = { sequelize, User };