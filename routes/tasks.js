var express = require('express');
var router = express.Router();

//module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    router.post('/', tasks.create);

    router.get('/', tasks.findAll);

    router.put('/:taskId', tasks.update);

    router.delete('/:taskId', tasks.delete);
//}

module.exports = router;