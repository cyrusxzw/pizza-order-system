var router = require('express').Router();
var pizzaRepository = require('../repository/pizza');


router.post('/', function(req, res, next) {
    pizzaRepository.create({
        name: req.body.name
    }).then(newTodo => {
        res.json(newTodo);
    }).catch(err => {
        console.error(err);
        res.status(500).send(err);
    })
})

router.get('/', function(req, res, next) {
    pizzaRepository.find().then(todoList => {
        res.json(todoList);
    }).catch(err => {
        console.error(err);
        res.status(500).send(err);
    })
})

router.get('/:id', function(req, res, next) {
    pizzaRepository.findById(req.params.id).then(todo => {
        if (!todo) {
            return res.sendStatus(404);
        }
        res.json(todo);
    })
})

router.patch('/:id', function(req, res, next) {
    pizzaRepository.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(todo => {
        if (!todo) {
            return res.sendStatus(404);
        }
        res.json(todo);
    })
})

router.delete('/:id', function(req, res, next) {
    pizzaRepository.findByIdAndRemove(req.params.id).then(todo => {
        res.json(todo);
    })
})

module.exports = router