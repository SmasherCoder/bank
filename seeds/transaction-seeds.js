const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
     path: './fakeTransactionArray.csv',
     header: [
        {id: 'date', title: 'date'},
        {id: 'type', title: 'type'},
        {id: 'amount', title: 'amount'},
        {id: 'acct_id', title: 'acct_id'}
   ]
});

let records = [];

function randomTranType() {
    var choices = ['Check', 'Credit', 'Debit', 'Transfer from Savings'];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function randomSavingsTranType() {
    var choices = ['Deposit', 'Withdrawl', 'Transfer from Checking'];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index]; 
}

function generateCheckingArray(){

    for (let i = 0; i < 30; i++) { 
        let fakeDate = faker.date.between('2021-02-01', '2021-02-30');
        let type = randomTranType();
        let fakeAmount = faker.finance.amount();
        let accountId = 1;  
         records.push(
            {date: `${fakeDate}`, type: `${type}`, amount: `${fakeAmount}`, acct_id: `${accountId}`});
      }
      csvWriter.writeRecords(records)
      .then(() => {
           console.log('Checkings Records Done');
      });
  };

function generateSavingsArray(){
    for (let i = 0; i < 30; i++) {
        let fakeDate = faker.date.between('2021-02-01', '2021-02-30');
        let type = randomSavingsTranType();
        let fakeAmount = faker.finance.amount();
        let accountId = 2;
        records.push(
            {date: `${fakeDate}`, type: `${type}`, amount: `${fakeAmount}`, acct_id: `${accountId}`}); 
        console.log(records); 
    }
    csvWriter.writeRecords(records)
    .then(() => {
         console.log('Savings Records Done');
    });
};
  

  generateCheckingArray();
  generateSavingsArray();