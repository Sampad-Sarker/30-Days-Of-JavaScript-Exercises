//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: {
    freelancing: 2150,
    onlineCourses: 2500,
    offlineJob: 5000,
  },
  expenses: {
    food: 2000,
    dresses: 1000,
    homeRent: 2300,
    medical: 1250,
  },
  totalIncome: function () {
    let totalIncome = 0;
    for (const income of Object.values(this.incomes)) {
      totalIncome += income;
    }
    return totalIncome;
  },
  totalExpense: function () {
    let totalExpense = 0;
    for (const expense of Object.values(this.expenses)) {
      totalExpense += expense;
    }
    return totalExpense;
  },
  accountInfo: function () {
    let accountHolderName = `${this.firstName} ${this.lastName}`,
      income = `${Object.entries(this.incomes)}`,
      expense = `${Object.entries(this.expenses)}`,
      accountBalance = this.accountBalance();

    return `name : ${accountHolderName}\nincomes : ${income}\nexpense : ${expense}\naccount Balance : ${accountBalance}`;
  },
  addIncome: function (income, incomeDescription = "bonus") {
    this.incomes[incomeDescription] = income;

    // return this.incomes
  },
  addExpense: function (expense, expenseDescription = "entertainment") {
    this.expenses[expenseDescription] = expense;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountInfo());

personAccount.addIncome(12000, "passiveIncomes");
personAccount.addExpense(200);

console.log(personAccount.accountInfo());

/*
2. Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application
*/
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const generatesId = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}><?~";

  let newId = ``;
  for (let i = 0; 5 >= newId.length; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length);

    newId += characters[randomCharacter];
  }

  return newId;
};

const generatesDateTime = () => {
  let now = new Date();
  let date = now.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  let month = now.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = now.getFullYear();
  let hours = now.getHours();
  //   if (hours < 10) {
  //     hours = "0" + hours;
  //   }
  if (hours < 10) {
    hours = "0" + hours;
  } else if (hours > 12) {
    hours = hours - 12;
    if (hours < 10) {
      hours = "0" + hours;
    }
  }
  let amPm;
  if (now.getHours() >= 0 && now.getHours() < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${date}/${month}/${year} ${hours}:${minutes} ${amPm}`;
};

const signUP = (
  newUserName,
  newUserEmail = newUserEmail.toLowerCase(),
  newUserPassword
) => {
  let emails = [];
  for (const user of users) {
    emails.push(user.email); //store all the emails address in emails array
  }

  // check new user email exists in email array
  if (emails.includes(newUserEmail)) {
    let alreadyExistingUserInfo = users.filter(
      (user) => user.email === newUserEmail
    );

    // return alreadyExistingUserInfo;
    return `You have already an account.Detail info :\n${JSON.stringify(
      alreadyExistingUserInfo
    )}`;
  } else {
    const newUserInfo = {
      _id: generatesId(),
      username: newUserName,
      email: newUserEmail,
      password: newUserPassword,
      createdAt: generatesDateTime(),
      isLoggedIn: false,
    };
    users.push(newUserInfo);

    // return users;
    return `new user added successfully :\n${JSON.stringify(users)}`;
  }
};

// let newUserName = prompt(`Enter a new User Name :`),
//     newUserEmail = prompt(`Enter new User email address :`),
//     newUserPassword = prompt(`Enter new User's password :`)

let newUserName = "sam", // take input by prompt() for dynamically
  newUserEmail = "sam@example.com", // take input by prompt() for dynamically
  newUserPassword = "123456"; // take input by prompt () for dynamically

console.log(`${signUP(newUserName, newUserEmail, newUserPassword)}`);
console.log(`${signUP(newUserName, newUserEmail, newUserPassword)}`);
console.log(
  `${signUP((newUserName = "Zuckerberg"), newUserEmail, newUserPassword)}`
);
console.log(
  `${signUP(
    (newUserName = "Zuckerberg"),
    (newUserEmail = "meta@facebook.com"),
    (newUserPassword = "9876543")
  )}`
);

console.table(users);

// b. Create a function called signIn which allows user to sign in to the application

const signIn = (userName, userPassword, userEmail) => {
  let userNames = [],
    userPasswords = [],
    userEmails = [];

  for (const user of users) {
    userNames.push(user.username);
    userPasswords.push(user.password);
    userEmails.push(user.email);
  }
  // console.log(userNames, userPasswords, userEmails);

  let userInfo = users.filter((user) => user.username === userName);
  // console.log(userInfo);

  let loggedInStatus = userInfo[0].isLoggedIn;
  // console.log(loggedInStatus);

  if (
    userNames.includes(userName) &&
    userPasswords.includes(userPassword) &&
    userEmails.includes(userEmail) &&
    !loggedInStatus
  ) {
    let indexPositionOfUser = users.findIndex(
      (user) => user.email === userEmail
    );

    users[indexPositionOfUser].isLoggedIn = true;
    return `SignIn successful`;
  } else if (loggedInStatus === true) {
    return "user already SignedIn";
  } else {
    return `wrong user name or wrong password or wrong email`;
  }
};

// let signInUserName = prompt(`Enter user name :`),
// signInUserPassword = prompt(`Enter your password :`),
// signInUserEmail = prompt(`Enter your email address :`)

let signInUserName = `sam`, // take input by prompt() for dynamically
  signInUserPassword = `123456`, // take input by prompt() for dynamically
  signInUserEmail = `sam@example.com`; // take input by prompt() for dynamically

console.log(signIn(signInUserName, signInUserPassword, signInUserEmail));
console.log(signIn(signInUserName, signInUserPassword, signInUserEmail));
console.log(
  signIn(
    (signInUserName = `Thomas`),
    (signInUserPassword = `aaa`),
    (signInUserEmail = `sfsdf@example.com`)
  )
);

console.table(users);

//3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
console.table(products);

const rateProduct = (productName, rating, userId) => {
  let ratedProduct;
  products.forEach((product, index) => {
    // console.log(product,index);
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      //   console.log(products[index].ratings);
      products[index].ratings.push({ userId: userId, rate: rating });
      //   console.log(product);
      ratedProduct = product;
      //   return product  //can not return from forEach by default rules, for this reason we return from outside of foeEach
    }
  });

  return ratedProduct;
};
// let productName = prompt(`Enter a product name :`),
// rating= prompt(`Enter the rating (0 to 5) for the product :`),
// userId = prompt(`Enter your user id :`)

let productName = "TV", //take input by prompt() for dynamically
  rating = 4.5, //take input by prompt() for dynamically
  userId = "xx12cy"; //take input by prompt() for dynamically

// let ratedProduct = rateProduct(productName, rating, userId)
// console.log(`ratedProduct`,JSON.stringify(ratedProduct));

console.log(`rated product :`, rateProduct(productName, rating, userId));
console.log(
  `rated product :`,
  rateProduct((productName = "mobile phone"), (rating = 3), (userId = "o-otyi"))
);
// console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product

const averageRating = (productName) => {
  let sum = 0,
    allProductInfo = [];

  products.forEach((product) => {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      for (const rating of product.ratings) {
        sum += rating.rate;
      }

      let numberOfRating = product.ratings.length;
      let averageRating = 0;

      if (numberOfRating > 0) {
        averageRating = (sum / numberOfRating).toFixed(2);
      } else {
        averageRating = `no rating yet`;
      }

      let productInfo = {
        name: product.name,
        averageRate: averageRating,
      };

      allProductInfo.push(productInfo);

      sum = 0; //rest sum
    }
  });

  return allProductInfo;
};

let aSingleProductName = `Tv`;

// let averageRatingOfAProduct =  averageRating(aSingleProductName)[0].averageRate
console.log(
  `average rating of a product:`,
  averageRating(aSingleProductName)[0].averageRate
);
console.table(averageRating(aSingleProductName));

aSingleProductName = `laptop`;
console.log(
  `average rating of a product:`,
  averageRating(aSingleProductName)[0].averageRate
);
console.table(averageRating(aSingleProductName));

//4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (productName, userId) => {
  let selectedProduct = products.filter(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (selectedProduct.length === 0) {
    return `${productName}, not exists the product`;
  } else {
    if (selectedProduct[0].likes.length === 0) {
      //if not liked then like the product
      // console.log(selectedProduct);
      let index = products.findIndex(
        (product) => product._id === selectedProduct[0]._id
      );

      products[index].likes.push(userId);

      return products[index];
    } else {
      return `${productName}, the product already has liked`;
    }
  }
};

// let productNameToLike = prompt(`Enter product name to like:`),
// userIdOfLiker = prompt(`Enter your user id`)
let productNameToLike = "tv led", // take input by prompt() for dynamically
  userIdOfLiker = "asdf"; //take input by prompt() for dynamically

console.log(
  "Product likes status :",
  likeProduct(productNameToLike, userIdOfLiker)
);

(productNameToLike = "mobile phone"), // take input by prompt() for dynamically
  (userIdOfLiker = "xxxxxxxx"); //take input by prompt() for dynamically

console.log(
  "Product likes status :",
  likeProduct(productNameToLike, userIdOfLiker)
);

(productNameToLike = "mobile phone"), // take input by prompt() for dynamically
  (userIdOfLiker = "vvv197"); //take input by prompt() for dynamically

console.log(
  "Product likes status :",
  likeProduct(productNameToLike, userIdOfLiker)
);

(productNameToLike = "laptop"), // take input by prompt() for dynamically
  (userIdOfLiker = "<O=O>"); //take input by prompt() for dynamically

console.log(
  "Product likes status :",
  likeProduct(productNameToLike, userIdOfLiker)
);

(productNameToLike = "iphone"), // take input by prompt() for dynamically
  (userIdOfLiker = "o_O"); //take input by prompt() for dynamically

console.log(
  "Product likes status :",
  likeProduct(productNameToLike, userIdOfLiker)
);
