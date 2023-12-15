const express = require('express')
const mongoose = require('mongoose')
const foodRouter = require('./routes/livraisonRoute.js')
const eurekaHelper = require('./eureka-helper');
const PORT =  8081;
const app = express()

app.use(express.json())

mongoose.connect(
  'mongodb+srv://shaymaettaieb:shayma123@cluster0.xgy4wjn.mongodb.net/?retryWrites=true&w=majority',

  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('connected', () => {
  console.log('Connected to MongoDB');
});

app.use(foodRouter)

app.listen(8081, () => {
  console.log('Server is running...')
})

eurekaHelper.registerWithEureka('seance-service', PORT);
