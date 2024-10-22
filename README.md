# Financial Tracker API

This project is a simple RESTful API for managing personal financial records (income and expenses) using Node.js and SQLite. It allows users to add transactions, retrieve them, and generate summaries by category or time period.

## Features

- Record transactions (income or expense).
- Retrieve a list of transactions.
- Update and delete transactions by ID.
- View a summary of income, expenses, and balance.
- Optional filtering by date range and category.

## Tools and Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite (for simplicity)
- **Frontend**: Basic HTML for testing the API

## Project Structure

```bash
financial-tracker-api/
├── controllers/
├── models/
├── routes/
├── config/
├── middlewares/
├── public/
├── app.js
├── package.json
├── .env
├── README.md
└── sqlite.db
