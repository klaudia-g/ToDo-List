var express = require('express');
var router = express.Router();

//module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    router.post('/', tasks.create);

    router.get('/:userId', tasks.findAll);

    router.put('/:taskId', tasks.update);

    router.delete('/:userId/:taskId', tasks.delete);
//}

module.exports = router;