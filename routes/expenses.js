const express = require('express');
const router = express.Router();

const expensesCtrl = require('../controllers/expenses');

router.get('/', expensesCtrl.index);

router.get("/new", expensesCtrl.newExpense)
router.get('/:id', expensesCtrl.show);
router.delete('/:id', expensesCtrl.deleteExpense)

module.exports = router;