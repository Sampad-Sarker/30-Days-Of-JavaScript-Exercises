//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  //number of samples
  count() {
    return this.ages.length;
  }

  //total value of all the samples
  sum() {
    let sum = 0;
    for (const age of ages) {
      sum += age;
    }
    return sum;
  }
  //minimum value among the samples
  min() {
    return Math.min(...ages);
  }
  //maximum value among the samples
  max() {
    return Math.max(...ages);
  }
  //range = maximum value - minimum value
  range() {
    return this.max() - this.min();
  }

  /*
    mean also known as average
    mean = total value / number of samples
  */
  mean() {
    return this.sum() / this.count();
  }

  /*
  if number of samples is odd then median is the middle value of the samples
  if number of samples is even then median is the average of two middle values of the samples
  */
  median() {
    let ages_ = [...this.ages];
    ages_.sort((a, b) => a - b); //sorting ascending order

    let count = this.count();

    if (count % 2 !== 0) {
      let position = (count + 1) / 2;
      let median = ages_[position - 1];
      return median;
    } else {
      let positionOne = count / 2;
      let positionTwo = positionOne + 1;

      let median = (ages_[positionOne - 1] + ages_[positionTwo - 1]) / 2;

      return median;
    }
  }
  /*
  mode is defined as the value that has a higher frequency(appearing number) in a given set of samples.
  */
  mode() {
    const uniqueAges = [...new Set(this.ages)];
    let ageInfos = [];
    for (const age of uniqueAges) {
      let eachAge = this.ages.filter((eachAge) => eachAge === age);

      let eachAgeInfo = {
        // mode: eachAge[0],
        age: age,
        count: eachAge.length,
      };

      ageInfos.push(eachAgeInfo);
    }

    const descendingSorting = (a, b) => {
      let fa = a.count,
        fb = b.count;

      if (fa > fb) return -1;
      if (fa < fb) return 1;
      return 0;
    };

    ageInfos.sort(descendingSorting);

    // ageInfos.sort((a,b)=>{
    //   let fa = a.count,
    //   fb = b.count

    //   if (fa > fb) return -1
    //   if (fa < fb) return 1
    //   return 0
    // })
    // console.table(ageInfos)

    // return ageInfos[0];
    let mode = `(${ageInfos[0].age},${ageInfos[0].count})`;
    return mode;
  }
  /*
  The variance is squared of difference between each sample and average of the samples and divide it by the number of samples
  
  variance = ((total(eachNumber - average)) ** 2) / number of samples

  */
  var() {
    let mean = this.mean(),
      sum = 0;

    for (const age of this.ages) {
      sum += (age - mean) ** 2;
    }
    const variance = sum / this.count();

    return variance;
  }

  /*
  Standard deviation is the square root of the variance
  */
  std() {
    let std = Math.sqrt(this.var()).toFixed(2);
    return std;
  }
  //maybe
  //number of appearance of each sample
  freqDist() {
    const uniqueAges = [...new Set(this.ages)];
    let ageInfos = [];
    for (const age of uniqueAges) {
      let eachAge = this.ages.filter((eachAge) => eachAge === age);

      let eachAgeInfo = {
        // mode: eachAge[0],
        age: age,
        frequency: eachAge.length,
      };

      ageInfos.push(eachAgeInfo);
    }
    // console.table(ageInfos);

    let onlyInfos = [];
    for (const { age, frequency } of ageInfos) {
      let info = `(${age},${frequency})`;
      onlyInfos.push(info);
    }

    // console.log(onlyInfos);
    return onlyInfos;
    // return ageInfos
  }

  describe() {
    return `
        Count: ${this.count()}
        Sum:  ${this.sum()}
        Min:  ${this.min()}
        Max:  ${this.max()}
        Range:  ${this.range()}
        Mean:  ${this.mean()}
        Median:  ${this.median()}
        Mode:  ${this.mode()}
        Variance:  ${this.var()}
        Standard Deviation:  ${this.std()}
        Frequency Distribution: [${this.freqDist()}]`;
  }
}

const statistics = new Statistics(ages);

console.log(`the sample :`, ages);
console.log(`all statistics :`, statistics.describe());

//2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = {
        freelancing: 2150,
        onlineCourses: 2500,
        offlineJob: 5000,
    }
    this.expenses = {
        food: 2000,
        dresses: 1000,
        homeRent: 2300,
        medical: 1250,
    }
  }

  totalIncome() {
    let totalIncome = 0;
    for (const income of Object.values(this.incomes)) {
      totalIncome += income;
    }
    return totalIncome;
  }

  totalExpense() {
    let totalExpense = 0;
    for (const expense of Object.values(this.expenses)) {
      totalExpense += expense;
    }
    return totalExpense;
  }

  accountInfo() {
    let accountHolderName = `${this.firstName} ${this.lastName}`,
      income = `${Object.entries(this.incomes)}`,
      expense = `${Object.entries(this.expenses)}`,
      accountBalance = this.accountBalance();

    return `name : ${accountHolderName}\nincomes : ${income}\nexpense : ${expense}\naccount Balance : ${accountBalance}`;
  }

  addIncome(income, incomeDescription = "bonus") {
    this.incomes[incomeDescription] = income;
  }

  addExpense(expense, expenseDescription = "entertainment") {
    this.expenses[expenseDescription] = expense;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

const account = new PersonAccount("sampad", "sarker");

console.log('account Information :\n',account.accountInfo());

const anotherAccount = new PersonAccount("john", "doe");

account.addIncome(2500, 'passiveIncomes')
account.addExpense(750, 'traveling')

console.log(anotherAccount.accountInfo());
