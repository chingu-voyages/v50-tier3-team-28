const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const dbConnection = require('./config/dbConnection');
// const dbContext = require("./config/dbContext");
const { errorHandler } = require('./middleware/errorHandler');
const dashboardRoutes = require('./routes/dashboardRoutes');
const userRoutes = require('./routes/userRoutes');
// const requestRoute = require('./routes/requestRoute');

dbConnection();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/user', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
