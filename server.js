const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "Loyha 22" directory
app.use(express.static(path.join(__dirname, 'Loyha 22')));

// Main routes for HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Loyha 22', 'landing.html'));
});

app.get('/navbat', (req, res) => {
    res.sendFile(path.join(__dirname, 'Loyha 22', 'Navbat.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'Loyha 22', 'Admin.html'));
});

// Basic API check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Navbat.uz backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
