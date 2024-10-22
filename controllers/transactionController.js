const Transaction = require('../models/transactionModel');

exports.createTransaction = (req, res) => {
    Transaction.create(req.body, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error creating transaction', error: err.message });
        } else {
            res.status(201).json({ message: 'Transaction created successfully' });
        }
    });
};

exports.getTransactions = (req, res) => {
    Transaction.findAll((err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching transactions', error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
};

exports.getTransactionById = (req, res) => {
    const { id } = req.params;
    Transaction.findById(id, (err, row) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching transaction', error: err.message });
        } else if (!row) {
            res.status(404).json({ message: 'Transaction not found' });
        } else {
            res.status(200).json(row);
        }
    });
};

exports.updateTransaction = (req, res) => {
    const { id } = req.params;
    Transaction.update(id, req.body, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error updating transaction', error: err.message });
        } else {
            res.status(200).json({ message: 'Transaction updated successfully' });
        }
    });
};

exports.deleteTransaction = (req, res) => {
    const { id } = req.params;
    Transaction.delete(id, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting transaction', error: err.message });
        } else {
            res.status(200).json({ message: 'Transaction deleted successfully' });
        }
    });
};
