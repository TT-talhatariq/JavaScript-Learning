'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

  interestRate: 1.2, // %

  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Display Movements of Amounts
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements.slice().sort((a, b) => b - a);
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `  
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">2 deposit</div>
    <div class="movements__date">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
};

//User Names Creation Functions
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//Calculate Balanace
const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//lOGIN Feature
let currentAccount;
//Login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI & a Welcome Message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    //Clear Input fields
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = `Invalid Credentials ⚠`;
  }
});
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display Balance
  calcBalance(acc);
  calcDisplaySummary(acc.movements);
};

// Tranfser Money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  console.log(amount < currentAccount.balance);
  if (
    recieverAcc != null &&
    recieverAcc?.username !== currentAccount.username &&
    amount > 0 &&
    amount < currentAccount.balance
  ) {
    currentAccount.balance -= amount;
    currentAccount.movements.push(amount * -1);
    updateUI(currentAccount);
    currentAccount.recieverAcc += amount;
    currentAccount.movements.push(amount);
  } else {
    console.log(recieverAcc);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});

//Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    //accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

//Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.textContent = '';
});
let sortedState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});
