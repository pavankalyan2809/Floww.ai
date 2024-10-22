const db = require('../config/database');

// Create table for categories if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL
)`);

// Category Model
const Category = {
    create: (data, callback) => {
        const { name, type } = data;
        db.run(`INSERT INTO categories (name, type)
                VALUES (?, ?)`, [name, type], callback);
    },
    findAll: (callback) => {
        db.all(`SELECT * FROM categories`, [], callback);
    }
};

module.exports = Category;
