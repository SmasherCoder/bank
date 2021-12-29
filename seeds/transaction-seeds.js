const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './fakeTransactionArray.csv',
    header: [
        { id: 'date', title: 'date' },
        { id: 'description', title: 'description' },
        { id: 'amount', title: 'amount' },
        { id: 'acct_id', title: 'acct_id' }
    ]
});

let records = [];

function randomSavingsTranType() {
    var choices = ['Deposit', 'Withdrawl from ATM', 'Transfer from Checking'];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function generateCheckingArray() {
    for (let i = 0; i < 30; i++) {
        let fakeDate = faker.date.between('2021-02-01', '2021-02-30');
        //converts faker date to string
        let myJSON = JSON.stringify(fakeDate);
        //extracts out date of faker data
        let newFakerDate = myJSON.substring(1, 11);
        let fakerDescription = faker.finance.transactionDescription();
        let myJSONtwo = JSON.stringify(fakerDescription);
        let quoteRemove = myJSONtwo.substring(1);
        let fakeDescArray = quoteRemove.split("for");
        let newDesc = fakeDescArray[0];
        let fakeAmount = faker.finance.amount();
        let accountId = 1;
        records.push(
            { date: `${newFakerDate}`, description: `${newDesc}`, amount: `${fakeAmount}`, acct_id: `${accountId}` });
    }
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('Checkings Records Done');
        });
};

function generateSavingsArray() {
    for (let i = 0; i < 30; i++) {
        let fakeDate = faker.date.between('2021-02-01', '2021-02-30');
        //converts faker date to string
        let myJSON = JSON.stringify(fakeDate);
        //extracts out date of faker data
        let newFakerDate = myJSON.substring(1, 11);
        let fakerDescription = randomSavingsTranType();
        let fakeAmount = faker.finance.amount();
        let accountId = 2;
        records.push(
            { date: `${newFakerDate}`, description: `${fakerDescription}`, amount: `${fakeAmount}`, acct_id: `${accountId}` });
    }
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('Savings Records Done');
        });
};
console.log(records);

generateCheckingArray();
generateSavingsArray();