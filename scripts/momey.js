// get Income
function getIncome() {
  const incomeField = document.getElementById("income-input");
  const income = parseFloat(incomeField.value);
  return income;
}
function getExpense() {
  // get Expenses
  const foodExpense = parseFloat(document.getElementById("foods").value);
  const rentExpense = parseFloat(document.getElementById("rent").value);
  const clothesExpense = parseFloat(document.getElementById("clothes").value);

  // TotalExpense
  const totalExpense = foodExpense + rentExpense + clothesExpense;
  return totalExpense;
}


function setTotalExpenseBalance() {
  const totalExpenseElement = document.getElementById("total-expense");
  totalExpenseElement.innerText = getExpense();
  // Balance
  const balanceElement = document.getElementById("balance");
  const balance = getIncome() - getExpense();
  balanceElement.innerText = balance;
  return balance;
}


function getSavings() {
  // Savings & remaining Balance
  const savingsAmountElement = document.getElementById("savings-amount");
  const savings = getIncome() * 0.2;
  savingsAmountElement.innerText = savings;

  const remainingBalanceElement = document.getElementById("remaining-balance");
  const remainedBalance = setTotalExpenseBalance() - savings;
  remainingBalanceElement.innerText = remainedBalance;
}
