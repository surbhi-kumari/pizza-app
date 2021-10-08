const express = require('express');
const pizza = require('./models/pizzaModels');
const app = express();
const db = require('./db');
const port = process.env.PORT || 8000;
app.use(express.json());
const path = require('path');
const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/orderRoute');
app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
