const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const db = require('./config/database'); // Assumed you have a database config file

app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const transactionRoutes = require('./routes/transactionRoutes');
app.use('/transactions', transactionRoutes);

// Serve the index.html file as the default homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

