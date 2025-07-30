import React, { useEffect } from 'react';
import axios from 'axios';

export default function MainComponent() {
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/classify', {
      prompt: 'Quick integration validation'
    })
    .then(response => {
      console.log('[NeuralCore API Response]', response.data);
    })
    .catch(error => {
      console.error('[API Error]', error);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <p>NeuralCore Frontend API integration active. Check console log.</p>
    </div>
  );
}
