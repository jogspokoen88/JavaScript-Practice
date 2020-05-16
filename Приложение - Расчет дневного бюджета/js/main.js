let startButton = document.getElementById('start')
let budgetValue = document.getElementsByClassName('budget-value')[0]
let daybudget = document.getElementsByClassName('daybudget-value')[0]
let levelValue = document.getElementsByClassName('level-value')[0]
let expensesValue = document.getElementsByClassName('expenses-value')[0]
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0]
let income = document.getElementsByClassName('income-value')[0]
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0]
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0]

let year = document.getElementsByClassName('year-value')
let month = document.getElementsByClassName('month-value')
let day = document.getElementsByClassName('day-value')

let expensesItem = document.querySelectorAll('.expenses-item')

let approveExpensesBtn = document.getElementsByTagName('button')[0]
let approveBudgetBtn = document.getElementsByTagName('button')[1]
let calculateBtn = document.getElementsByTagName('button')[2]

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item')

let countBudget = document.getElementsByClassName('count-budget')
let chooseIncome = document.getElementsByClassName('choose-income')
let checkbox = document.getElementById('savings')
let sumValue = document.getElementById('sum')
let percentValue = document.getElementById('percent')

let money, time


startButton.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD")
    money = +prompt ("Ваш бюджет на месяц?")

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?")
    }
    appData.budget = money
    appData.timeData = time
    budgetValue.textContent = money.toFixed()
    year.value = new Date(Date.parse(time)).getFullYear()
    month.value = new Date(Date.parse(time)).getMonth() + 1
    day.value = new Date(Date.parse(time)).getDate()
})

approveExpensesBtn.addEventListener('click', function() {
    let sum = 0

    for (i = 0; i < expensesItem.length; i++) {

        let a = expensesItem[i].value
        let b = expensesItem[++i].value
    
        if ( (typeof(a)) === "string" &&  (typeof(a)) != null &&  (typeof(b))
            != null &&a !='' && b != '' && a.length < 50) {
            console.log("done")
            appData.expenses[a] = b
            sum += +b
        } else {
            i = i - 1
        }  
    }
    expensesValue.textContent = sum
})

approveBudgetBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalexpensesItem.length; i++) {
        let questionOptExpenses = optionalexpensesItem[i].value
        appData.optionalExpenses[1] = questionOptExpenses
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '
    }
})

calculateBtn.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed()
        daybudget.textContent += appData.moneyPerDay
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка"
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка"
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка"
        } else {
            levelValue.textContent = "Произошла ошибка"
        }
    } else {
        daybudget.textContent = 'Произошла ошибка'
    }
})

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value
    appData.income = items.split(', ')
    chooseIncome.textContent = appData.income
})

checkbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false
    } else {
        appData.savings = true
    }
})

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value
            percent = +percentValue.value

        appData.monthIncome = sum/100/12*percent
        appData.yearIncome = sum/100*percent

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1)
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
    }
})

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value
            percent = +percentValue.value

        appData.monthIncome = sum/100/12*percent
        appData.yearIncome = sum/100*percent

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1)
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}
