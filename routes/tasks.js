const auth = require('../middleware/auth');
var express = require('express');
var router = express.Router();

//module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    router.post('/', auth, tasks.create);

    router.get('/:userId', auth, tasks.findAll);

    router.put('/:taskId', auth, tasks.update);

    router.delete('/:userId/:taskId', auth, tasks.delete);
//}

module.exports = router;