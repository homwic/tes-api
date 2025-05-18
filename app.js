// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Contoh endpoint GET
app.get('/', (req, res) => {
  res.send('STATUS OKE');
});

// Contoh endpoint GET data
app.get('/api/data', (req, res) => {
  res.json({ message: 'Ini data dari API', data: [1, 2, 3] });
});

// Contoh endpoint POST
app.post('/api/data', (req, res) => {
  const inputData = req.body;
  res.status(201).json({ message: 'Data diterima', input: inputData });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
