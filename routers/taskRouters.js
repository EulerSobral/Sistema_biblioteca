const express = require('express') 
const router = express.Router()
const TaskController = require('../controllers/TaskControl') 

router.get('/tasks', TaskController.createTask) 
router.get('/', TaskController.showTask)    
router.get('/update/:id', TaskController.updateTask) 
router.post('/insert/tarefas', TaskController.createTaskSave)  
router.post('/deletar/task', TaskController.deletarTask)  
router.post('/update/task', TaskController.updateTaskSave) 
module.exports = router