const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Halo dari Node.js Backend!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server berjalan di http://0.0.0.0:${PORT}`);
});
