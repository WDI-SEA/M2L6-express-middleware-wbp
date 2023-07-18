module.exports = {
  index,
  show,
  deleteExpense,
  newExpense,
};
const  Expense = require('../models/expense')

function index(req, res) {
  const expenses = Expense.getAll();

  res.render('expenses/index', {
    title: 'Expense Report',
    expenses
  });
}

function show(req, res) {
  const expense = Expense.getOne(req.params.id);

  res.render('expenses/show', {
    title: 'Expense Details',
    expense
  });
}
function deleteExpense(req,res){
  let id = parseInt(req.params.id)
  Expense.deleteExpense(id)
  res.redirect('/expenses')
}
function newExpense(req,res){
  res.render('expenses/new', {title: "Add Expense"})
}