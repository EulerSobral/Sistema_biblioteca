const Sequelize = require('sequelize') 
const db = require('../db/coon') 
const task = db.define('book', { 
    id:{ 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    title: { 
        type: Sequelize.STRING,
    }, 
    pags:{ 
        type: Sequelize.INTEGER, 
        allowNull: false
    }
}); 
module.exports = task