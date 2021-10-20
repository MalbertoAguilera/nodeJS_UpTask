const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
const db = new Sequelize('upTaskNode','root', 'root',{
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3306",
  define: {
    timestamps: false,
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
});

module.exports = db;
