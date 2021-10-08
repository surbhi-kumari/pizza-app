const mongosse = require('mongoose');

const pizzaSchema = mongosse.Schema(
  {
    name: {
      type: String,
      require,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      require,
    },
    image: {
      type: String,
      require,
    },

    description: {
      type: String,
      require,
    },
  },
  {
    timestamp: true,
  }
);

const pizzaModel = mongosse.model('pizzas', pizzaSchema);
module.exports = pizzaModel;
