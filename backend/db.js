// postgresql package
const { Client } = require('pg');

// create a new client
const client = new Client({
  user: 'yash431garg',
  host: 'localhost',
  database: 'bankdb',
  password: 'password',
  port: 5432,
});

// connect to the database
const connect = async () => {
  await client.connect();
};
try {
  connect();
  console.log('connected');
} catch (err) {
  console.log(err);
  console.log('not connected');
}

// create new account function.
const createNewAccount = async (ac_id, ac_name, bal) => {
  await client.query(
    `insert into account values ($1, $2, $3)`,
    [ac_id, ac_name, bal],
    (err, res) => {
      if (err) {
        console.log(err);
        console.log('❌ error creating account');
      } else {
        console.log('✅ account created');
        console.log(res);
      }
    }
  );
};

// withdraw function
const withdraw = async (ac_id, amount) => {
  await client.query(
    `select balance from account where ac_id = $1`,
    [ac_id],
    (err, res) => {
      if (err) {
        console.log(err);
        console.log('❌ error withdrawing');
      } else {
        const balance = parseFloat(res.rows[0].balance);
        console.log(`\n Your existing balance is ${balance}`);
        const newBalance = balance - amount;

        client.query(
          `update account set balance = $1 where ac_id = $2`,
          [newBalance, ac_id],

          (err, res) => {
            if (err) {
              console.log(err);
              console.log('❌ error withdrawing');
            } else {
              console.log(
                ` ✅ balance withdrawn remaining blaance ${newBalance}`
              );
            }
          }
        );
      }
    }
  );
};

// deposit function
const deposit = async (ac_id, amount) => {
  await client.query(
    `select balance from account where ac_id = $1`,
    [ac_id],
    (err, res) => {
      if (err) {
        console.log(err);
        console.log('❌ error depositing');
      } else {
        const balance = parseFloat(res.rows[0].balance);
        console.log(`\n Your existing balance is ${balance}`);
        const newBalance = balance + amount;

        client.query(
          `update account set balance = $1 where ac_id = $2`,
          [newBalance, ac_id],

          (err, res) => {
            if (err) {
              console.log(err);
              console.log('❌ error depositing');
            } else {
              console.log(` ✅ balance deposited net blaance ${newBalance}`);
            }
          }
        );
      }
    }
  );
};

// balance function
const balance = async (ac_id) => {
  await client.query(
    `select balance from account where ac_id = $1`,
    [ac_id],
    (err, res) => {
      if (err) {
        console.log(err);
        console.log('❌ error fetching blance');
      } else {
        const balance = parseFloat(res.rows[0].balance);
        console.log(`\n Your existing balance is ${balance}`);
      }
    }
  );
};

// transfer function
const transfer = (payer_id, payee_id, amount) => {
  withdraw(payer_id, amount);
  deposit(payee_id, amount);
};

// module exports
module.exports = {
  createNewAccount,
  withdraw,
  deposit,
  balance,
  transfer,
};
