const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');
const app = express();

dotenv.config();

app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[NODEBLACK][augment\\reactor] server running on port ${port}`);
});
