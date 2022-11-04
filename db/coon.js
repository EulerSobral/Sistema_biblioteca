const Sequelize = require('sequelize') 
const sequelize = new Sequelize('library', 'root', '', { 
    host: 'localhost', 
    dialect: 'mysql', 
})   
try{ 
    sequelize.authenticate()  
}catch(erro){ 
    console.log(erro)
}
module.exports = sequelize