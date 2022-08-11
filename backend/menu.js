const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Banking App");

console.log("\n 1. Create an account");
console.log("\n 2. Deposit");
console.log("\n 3. Withdraw");
console.log("\n 4. Balance");
console.log("\n 4. Transfer");
console.log("\n 5. Exit");

rl.question("\n Enter your choice: ", (ch) => {
  console.log(`Thank you for choosing ${ch}`);
  rl.close();
});

rl.on("close", function () {
  console.log("\n BYE BYE !!!");
  process.exit(0);
});
