//1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
    let firstName = "John"
    let lastName = "Doe"
    let incomes = {
        freelancing: 2150,
        onlineCourses: 2500,
        offlineJob: 5000,
    }
    let expenses = {
        food: 2000,
        dresses: 1000,
        homeRent: 2300,
        medical: 1250,
    }

    const totalIncome = () => {
        let totalIncome = 0;
        for (const income of Object.values(incomes)) {
            totalIncome += income;
        }
        return totalIncome;
    }

    const totalExpense = () => {
        let totalExpense = 0;
        for (const expense of Object.values(expenses)) {
        totalExpense += expense;
        }
        return totalExpense;
    }

    const accountInfo =()=> {
        let accountHolderName = `${firstName} ${lastName}`,
        income = `${Object.entries(incomes)}`,
        expense = `${Object.entries(expenses)}`
        
        
        return `name : ${accountHolderName}\nincomes : ${income}\nexpense : ${expense}\naccount Balance : ${accountBalance()}`;
    }
    
    const addIncome = (income, incomeDescription = "bonus") => {
        incomes[incomeDescription] = income;
    }
    
    const addExpense = (expense, expenseDescription = "entertainment") => {
        expenses[expenseDescription] = expense;
    }
    
    const accountBalance = () => {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome : totalIncome,
        totalExpense : totalExpense,
        accountInfo : accountInfo,
        addIncome : addIncome,
        addExpense : addExpense,
        accountBalance : accountBalance
    }

}


const innerFuncs = personAccount()
console.log(innerFuncs.accountInfo());

innerFuncs.addExpense(200)
innerFuncs.addExpense(200, "traveling")

console.log(innerFuncs.accountInfo());

innerFuncs.addIncome(1000)
innerFuncs.addIncome(1200, 'consultancy')

console.log(innerFuncs.accountInfo());