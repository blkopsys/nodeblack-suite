const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Standardized API route import
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('[NODEBLACK] [control\trace] server running on port', PORT);
});
