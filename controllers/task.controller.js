const Task = require('../models/task.model.js');

exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    const task = new Task({
        isChecked: req.body.isChecked || false,
        content: req.body.content,
        userId: req.body.userId
    });

    task.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the task."
            });
        });
};

exports.findAll = (req, res) => {
    Task.find( { userId: req.params.userId } )
        .then(tasks => {
            res.send(tasks);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tasks."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    Task.findByIdAndUpdate(req.params.taskId, {
            content: req.body.content,
            isChecked: req.body.isChecked,
            userId : req.body.userId
        }, {
            new: true
        })
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            res.send(task);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            return res.status(500).send({
                message: "Error updating task with id " + req.params.taskId
            });
        });
};

exports.delete = (req, res) => {
    Task.find({ userId: req.params.userId, _id: req.params.taskId } )
    .then(tasks => {
        if(!tasks) {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        if(tasks.length>0){
            tasks[0].remove();
        }
        res.send({message: "Task deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Could not delete task with id " + req.params.taskId
        });
    });
};