const Category = require('../models/categoryModel');

exports.createCategory = (req, res) => {
    Category.create(req.body, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error creating category', error: err.message });
        } else {
            res.status(201).json({ message: 'Category created successfully' });
        }
    });
};

exports.getCategories = (req, res) => {
    Category.findAll((err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching categories', error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
};
