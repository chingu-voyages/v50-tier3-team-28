const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const dbConnection = require('./config/dbConnection');
// const dbContext = require("./config/dbContext");
const { errorHandler } = require('./middleware/errorHandler');
const dashboardRoutes = require('./routes/dashboardRoutes');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');

dbConnection();
app.use(express.json());

const determineOrigin = () => {
  const allowedOrigins = [
    'https://v50-tier3-team-28.onrender.com',
    'http://localhost:5173',
  ];
  return (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  };
};

app.use(
  cors({
    origin: determineOrigin(),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization, Set-Cookie, Cookie',
  })
);
// app.use(express.json());
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   })
// );

// app.use(
//   cors({
//     origin: 'https://v50-tier3-team-28.onrender.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     allowedHeaders:
//       'Origin,X-Requested-With,Content-Type,Accept,Authorization, Set-Cookie, Cookie',
//   })
// );

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/user', userRoutes);
app.use('/api/requests', requestRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
