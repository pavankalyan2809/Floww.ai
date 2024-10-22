const db = require('../config/database');

// Create a transaction
exports.createTransaction = (transactionData) => {
    return new Promise((resolve, reject) => {
        const { type, category, amount, date, description } = transactionData;
        const query = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
        
        db.run(query, [type, category, amount, date, description], function (err) {
            if (err) {
                return reject(err);
            }
            resolve({ id: this.lastID, ...transactionData });
        });
    });
};

// Find all transactions
exports.findAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM transactions`, [], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
};

// Find a transaction by ID
exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM transactions WHERE id = ?`, [id], (err, row) => {
            if (err) {
                return reject(err);
            }
            resolve(row);
        });
    });
};

// Update a transaction
exports.updateTransaction = (id, updatedData) => {
    return new Promise((resolve, reject) => {
        const { type, category, amount, date, description } = updatedData;
        const query = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
        
        db.run(query, [type, category, amount, date, description, id], function (err) {
            if (err) {
                return reject(err);
            }
            resolve({ id, ...updatedData });
        });
    });
};

// Delete a transaction
exports.deleteTransaction = (id) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM transactions WHERE id = ?`, [id], function (err) {
            if (err) {
                return reject(err);
            }
            resolve({ message: `Transaction with id ${id} deleted.` });
        });
    });
};
