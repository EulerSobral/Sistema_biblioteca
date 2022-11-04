const { raw } = require('express')
const { where } = require('sequelize')
const Task = require('../models/Task') 
module.exports = class TaskControl { 
    static createTask(req, res){ 
        res.render('Tasks/create_task')
    } 
    static async showTask(req, res){ 
        const tarefa = await Task.findAll({raw: true})
        res.render('Tasks/all', {tarefa})
    } 
    static async createTaskSave(req, res){ 
        const task = { 
            title: req.body.title, 
            pags:  req.body.pags, 
        } 
        await Task.create(task) // Faz com que o objeto task seja salvo 
        res.redirect('/')
    } 
    static async updateTask(req, res){  
        const id = req.params.id
        const tarefa = await Task.findOne({where: {id: id}, raw: true})
        res.render('Tasks/update', {tarefa})
    } 
    static async deletarTask(req, res){ 
        const id = req.body.id 
        await Task.destroy({where: {id: id}}) 
        res.redirect('/')
    } 
    static async updateTaskSave(req, res){ 
        const id = req.body.id 
        const tarefa = { 
            title: req.body.title, 
            pags: req.body.pags
        } 
        await Task.update(tarefa,{where: {id: id}}) 
        res.redirect('/')
    }  
}