const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/test-neuralcore', async (req, res) => {
  console.log('[control\trace_lite] API endpoint hit, initiating NeuralCore check.');
  try {
    const response = await axios.post('http://localhost:8000/api/classify', { prompt: 'Test prompt' });
    console.log('[control\trace_lite ? NeuralCore] Integration successful. Response:', response.data);
    res.json({ status: 'Active', neuralCore: response.data });
  } catch (error) {
    console.error('[control\trace_lite ? NeuralCore] Integration error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
