const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const telephone = document.querySelector("#telephone");
const bio = document.querySelector("#bio");
const button = document.querySelector("button");
const warningFname = document.querySelector("#warningFname");
const warningLname = document.querySelector("#warningLname");
const warningEmail = document.querySelector("#warningEmail");
const warningPassword = document.querySelector("#warningPassword");
const warningTelephone = document.querySelector("#warningTelephone");
const warningBio = document.querySelector("#warningBio");
let isFname = false,
  isLname = false,
  isEmail = false,
  isPassword = false,
  isTelephone = false,
  isBio = false;

const buttonStatus = () => {
  if (isFname && isLname && isEmail && isPassword && isTelephone && isBio) {
    console.log("success...........");
    button.className = "";
    button.setAttribute("class", "success");
  } else {
    console.log("not success........");
  }
};

fname.addEventListener("input", () => {
  const inputValue = fname.value;

  //less then 3 characters
  warningFname.textContent = ``;
  if (inputValue.length < 3) {
    warningFname.textContent = ``;
    warningFname.textContent =
      "First name must be alphanumeric and contain 3-16 characters";
    // console.log("a number >>", inputValue);

    fname.className = "";
    fname.setAttribute("class", "error");
    isFname = false;
  }

  //more then 3 characters and less then 17 characters
  if (inputValue.length >= 3 && inputValue.length <= 16) {
    // console.count("three to sixteen");
    // warningFname.textContent = "";

    //containing only numbers
    if (/^[0-9 ]+$/.test(inputValue)) {
      warningFname.textContent = "";

      // console.count("only number ", inputValue);
      warningFname.textContent =
        "First name must be alphanumeric and contain 3-16 characters";
      // console.log("only number >>", inputValue);

      fname.className = "";
      fname.setAttribute("class", "error");
      isFname = false;
    }
    //containing numbers  and letters together
    else if (/^[A-Za-z0-9 ]*$/.test(inputValue)) {
      // console.count("number and letter");

      warningFname.textContent = "";
      // console.log("fname is valid", inputValue);
      fname.className = "";
      fname.setAttribute("class", "success");
      isFname = true;
    }
  }

  buttonStatus();

  // console.log(fname.value);
});

lname.addEventListener("input", () => {
  const inputValue = lname.value;

  //less then 3 characters
  warningLname.textContent = ``;
  if (inputValue.length < 3) {
    warningLname.textContent = ``;
    warningLname.textContent =
      "First name must be alphanumeric and contain 3-16 characters";
    // console.log("a number >>", inputValue);

    lname.className = "";
    lname.setAttribute("class", "error");
    isLname = false;
  }

  //more then 3 characters and less then 17 characters
  if (inputValue.length >= 3 && inputValue.length <= 16) {
    //containing only numbers
    if (/^[0-9 ]+$/.test(inputValue)) {
      warningLname.textContent = "";

      // console.count("only number ", inputValue);
      warningLname.textContent =
        "First name must be alphanumeric and contain 3-16 characters";
      // console.log("only number >>", inputValue);

      lname.className = "";
      lname.setAttribute("class", "error");
      isLname = false;
    }
    //containing numbers  and letters together
    else if (/^[A-Za-z0-9 ]*$/.test(inputValue)) {
      // console.count("number and letter");

      warningLname.textContent = "";
      // console.log("fname is valid", inputValue);
      lname.className = "";
      lname.setAttribute("class", "success");
      isLname = true;
    }
  }
  buttonStatus();

  // console.log("lname >>>", lname.value);
});

email.addEventListener("input", () => {
  const inputValue = email.value;

  // A form with an email field that that must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a ".". After the "." sign, you can only write 2 to 3 letters from a to z:

  if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(inputValue)) {
    warningEmail.textContent = "";
    // console.log("email is valid", inputValue);
    email.className = "";
    email.setAttribute("class", "success");
    isEmail = true;
  } else {
    warningEmail.textContent = ``;
    warningEmail.textContent = `Email must be valid address e.g. example@example.com`;
    email.className = "";
    email.setAttribute("class", "error");
    isEmail = false;
  }

  buttonStatus();

  // console.log(email.value);
});

password.addEventListener("input", () => {
  const inputValue = password.value;

  // contain at least 6 to 20 characters from the mentioned characters
  if (/[a-zA-Z0-9 !@#$%^&*()_+-|\/":;,>?~]{6,20}/.test(inputValue)) {
    warningPassword.textContent = "";
    // console.log("password is >>>", inputValue);
    password.className = "";
    password.setAttribute("class", "success");
    isPassword = true;
  } else {
    warningPassword.textContent = ``;
    warningPassword.textContent = `Password must be alphanumeric (@,_ and - are also allowed) and between 6 and 20 characters`;
    password.className = "";
    password.setAttribute("class", "error");
    isPassword = false;
  }
  buttonStatus();

  // console.log(password.value);
});

telephone.addEventListener("input", () => {
  const inputValue = telephone.value;

  // contain the format 123-123-1234
  if (/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(inputValue)) {
    warningTelephone.textContent = "";
    // console.log("password is >>>", inputValue);
    telephone.className = "";
    telephone.setAttribute("class", "success");
    isTelephone = true;
  } else {
    warningTelephone.textContent = ``;
    warningTelephone.textContent = `A valid Telephone number(11 digits and 333-333-3334)`;
    telephone.className = "";
    telephone.setAttribute("class", "error");
    isTelephone = false;
  }

  buttonStatus();

  // console.log(telephone.value);
});

bio.addEventListener("input", () => {
  const inputValue = bio.value;

  //contains lowercase letters, underscores, hyphens and 8-50 characters
  if (inputValue.length >= 8 && inputValue.length <= 50) {
    if (/[a-z_-]{8,50}/.test(inputValue)) {
      warningBio.textContent = "";
      // console.log("bio is >>>", inputValue);
      bio.className = "";
      bio.setAttribute("class", "success");
      isBio = true;
    }
  } else {
    warningBio.textContent = ``;
    warningBio.textContent = `Bio must contain only lowercase letters, underscores, hyphens and 8-50 characters`;
    telephone.className = "";
    telephone.setAttribute("class", "error");
    isBio = false;
  }

  buttonStatus();

  // console.log(bio.value);
});
