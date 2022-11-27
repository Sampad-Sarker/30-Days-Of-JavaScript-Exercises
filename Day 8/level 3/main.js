//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName : 'John',
    lastName : 'Doe',
    incomes : {
        freelancing :2150,
        onlineCourses : 2500,
        offlineJob : 5000
    },
    expenses : {
        food : 2000,
        dresses : 1000,
        homeRent : 2300,
        medical : 1250
    },
    totalIncome : function(){
        let totalIncome = 0
        for (const income of Object.values(this.incomes)) {
            totalIncome += income
        }
        return totalIncome
    },
    totalExpense : function(){
        let totalExpense = 0
        for (const expense of Object.values(this.expenses)) {
            totalExpense += expense
        }
        return totalExpense
    },
    accountInfo: function(){
        let accountHolderName = `${this.firstName} ${this.lastName}`,
        income = `${Object.entries(this.incomes)}`,
        expense = `${Object.entries(this.expenses)}`,
        accountBalance = this.accountBalance()

        return `name : ${accountHolderName}\nincomes : ${income}\nexpense : ${expense}\naccount Balance : ${accountBalance}`

    },
    addIncome: function(income,incomeDescription = 'bonus'){
        this.incomes[incomeDescription] = income

        // return this.incomes
    },
    addExpense : function(expense,expenseDescription='entertainment'){
        this.expenses[expenseDescription] = expense
    },
    accountBalance : function() {
        return this.totalIncome() - this.totalExpense()
    }
}

console.log(personAccount.accountInfo())

personAccount.addIncome(12000, 'passiveIncomes')
personAccount.addExpense(200)

console.log(personAccount.accountInfo());
