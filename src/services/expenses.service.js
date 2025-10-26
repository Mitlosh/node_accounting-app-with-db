const { Expense } = require('../models/Expense.model');

// let expenses = [];

// const getId = () =>
// expenses.length > 0 ? Math.max(...expenses.map((u) => Number(u.id))) + 1 : 1;

const getAllExpenses = async () => {
  // return [...expenses];
  return Expense.findAll();
};

const createExpenses = async ({
  userId,
  spentAt,
  title,
  amount,
  category,
  note,
}) => {
  // const expense = {
  //   id: getId(),
  //   userId: Number(userId),
  //   spentAt,
  //   title,
  //   amount: Number(amount),
  //   category,
  //   note,
  // };
  // expenses.push(expense);
  // return expense;

  return Expense.create({
    userId: Number(userId),
    spentAt,
    title,
    amount: Number(amount),
    category,
    note,
  });
};

const getExpense = async (id) => {
  // return expenses.find((expense) => expense.id === Number(id)) || null;
  return Expense.findByPk(id);
};

const deleteExpenses = async (id) => {
  // expenses = expenses.filter((expense) => expense.id !== Number(id));
  await Expense.destroy({ where: { id } });
};

const updateExpenses = async (id, body) => {
  // const expense = getExpense(+id);
  // if (!expense) {
  //   return null;
  // }
  // Object.assign(expense, body);
  // return expense;

  const expense = Expense.findByPk(id);

  if (!expense) {
    return null;
  }

  await expense.update(body);

  return expense;
};

const resetExpenses = () => {
  // expenses = [];
  return Expense.destroy({ where: {} });
};

module.exports = {
  getAllExpenses,
  createExpenses,
  getExpense,
  deleteExpenses,
  updateExpenses,
  resetExpenses,
};
