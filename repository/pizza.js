var mongoose = require('mongoose');

var PizzaSchema = new mongoose.Schema({
    name: String,
    price: Number
});

var pizzaMongooseModel = mongoose.model('Pizzacreator', PizzaSchema);

var pizza1 = new pizzaMongooseModel({ name: 'Small Pizza', price: 10});
pizza1.save(function (err, pizza) {
    if (err) return console.error(err);
    console.log(pizza.name + " saved to bookstore collection.");
  });

module.exports = pizzaMongooseModel;