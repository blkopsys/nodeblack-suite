const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('[neuralcore\neuralcore] API endpoint hit');
  res.json({ status: 'Active', module: 'neuralcore\neuralcore' });
});

module.exports = router;
