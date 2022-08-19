const readline = require('readline');
const {
  createNewAccount,
  withdraw,
  deposit,
  balance,
  transfer,
} = require('./db');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('🙏 Welcome to the Banking App 🙏');

const options = () => {
  console.log('\n 1. Create an account');
  console.log('\n 2. Withdraw');
  console.log('\n 3. Deposit');
  console.log('\n 4. Balance');
  console.log('\n 5. Transfer');
  console.log('\n 6. Exit');
};
options();

const choice = (text) => {
  return new Promise((resolve, reject) => {
    rl.question(`\n${text}:`, (ch) => {
      resolve(ch);
    });
  });
};

const start = async () => {
  while (true) {
    const ch = await choice('🧐Enter your choice');
    if (ch == 1) {
      console.log('\nCreate an account');
      const ac_id = parseInt(await choice('🧐Enter your Id'));
      const ac_name = await choice('Enter your Name');
      const bal = 1500;
      await createNewAccount(ac_id, ac_name, bal);
      await choice();
      await options();
    }

    if (ch == 2) {
      console.log('\nWithdraw');
      const ac_id = parseInt(await choice('🧐Enter your Account Id'));
      const amount = parseFloat(await choice('🧐Enter Withdraw Amount'));
      await withdraw(ac_id, amount);
      await choice();
      await options();
    }
    if (ch == 3) {
      console.log('\nDeposit');
      const ac_id = parseInt(await choice('🧐Enter your Account Id'));
      const amount = parseFloat(await choice('🧐Enter Withdraw Amount'));
      await deposit(ac_id, amount);
      choice();
      options();
    }
    if (ch == 4) {
      console.log('\nBalance');
      const ac_id = parseInt(await choice('🧐Enter your Account Id'));
      await balance(ac_id);
      choice();
      options();
    }
    if (ch == 5) {
      console.log('\nTransfer');
      const ac_id_payer = parseInt(await choice('🧐Enter your Account Id'));
      const ac_id_payee = parseInt(await choice('🧐Enter others Account Id'));
      const amount = parseFloat(await choice('🧐Enter Withdraw Amount'));
      await transfer(ac_id_payer, ac_id_payee, amount);
      choice();
      options();
    }
    if (ch == 6) {
      console.log('\nExit');
      rl.close();
    }
    break;
  }
};
start();

rl.on('close', function () {
  console.log('\n BYE BYE !!!');
  process.exit(0);
});
