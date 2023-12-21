const express = require('express');
const bodyParser = require('body-parser');
// const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const offerRoutes = require('./routes/offerRoutes');
const { sequelize } = require('./models/index');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

// // Use routes
app.use('/api', userRoutes);
app.use('/api', storeRoutes);
app.use('/api', offerRoutes);

app.get('/', (req, res) => {
  res.send({ Message: 'Welcome to Backend' });
});

// Sync models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
