const express = require('express');
const path = require('path');
const db = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware untuk file statis (Landing Page)
app.use(express.static(path.join(__dirname, 'public')));

// API Route untuk mengecek koneksi database (Demo tujuan)
app.get('/api/status', async (req, res) => {
    try {
        await db.query('SELECT 1');
        res.json({ message: 'Terhubung ke MySQL (Level 1 Success)' });
    } catch (err) {
        res.status(500).json({ message: 'Gagal terhubung ke Database' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});