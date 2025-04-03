# Expense Tracker

A simple expense and income management system with a frontend and backend, designed to help users track their financial transactions efficiently.

## Features
- **Expense and Income Management** - Add, update, and delete transactions.
- **Dashboard Overview** - Displays:
  - Total income and total expenses
  - Net amount calculation
  - History of the three most recent transactions
  - Maximum and minimum income and expense
- **Transaction Pages**
  - Separate pages for income, expenses, and all transactions
- **Data Visualization**
  - A chart representing income and expenses over time with date and time tracking

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB



## API Endpoints
| Method | Endpoint       | Description               |
|--------|---------------|---------------------------|
| GET    | /api/getIncome   | Get all income records    |
| POST   | /api/addIncome   | Add a new income entry    |
| GET    | /api/getExpenses | Get all expense records   |
| POST   | /api/addExpense | Add a new expense entry   |
| GET    | /api/transactions | Get all transactions |

## Future Enhancements
- Implement user authentication
- Add budgeting and financial goal-setting features
- Improve UI and add filters for better trackingS

## License
This project is licensed under the MIT License.
