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

// app.use(express.json());
// const allowedOrigins = [
//   'http://localhost:5173/',
//   'https://v50-tier3-team-28.onrender.com/',
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           'The CORS policy for this site does not allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: 'https://v50-tier3-team-28.onrender.com/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization, Set-Cookie, Cookie',
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
