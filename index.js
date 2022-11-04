const express = require('express') 
const exhpbs = require('express-handlebars') 
const app = express() 
const coon = require('./db/coon') 
const Task = require('./models/Task')  
const taskRouter = require('./routers/taskRouters')

app.engine('handlebars', exhpbs.engine()) 
app.set('view engine', 'handlebars') 

app.use( 
    express.urlencoded({ 
        extended: true
    })
) 
app.use(express.json()) 
app.use(express.static('public')) 

app.use('/', taskRouter)

coon
    .sync() 
    .then(() => app.listen(3000)) 
    .catch((err) => console.log(err))