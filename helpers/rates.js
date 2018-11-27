const moment = require('moment');

exports.prepareTransactions = (transactions) => {
    if (!transactions) return [];
    const transactionsPerDateObject = {};
    for (let i = 0, length = transactions.length; i < length; i++) {
        const transaction = transactions[i];

        // In case a date was saved incorrectly throw the transaction away
        if (checkYears(new Date(transaction.Date))) {
            continue;
        }
        const transactionDate = moment(new Date(transaction.Date)).format('YYYY-MM-DD');
        if (transactionsPerDateObject[transactionDate]) {
            transactionsPerDateObject[transactionDate] += 1;
        } else {
            transactionsPerDateObject[transactionDate] = 1;
        }
    }

    var entries = Object.entries(transactionsPerDateObject).map(([date, value]) => { return { date, value } });
    return entries.sort(function (x, y) {
        return new Date(x.date) - new Date(y.date); 
    })
};

exports.calculateAmount = (amount, rate, dollarRate) => {
    return (amount * rate) / dollarRate;
};

function checkYears(date) {
    return moment(date).diff(moment(new Date()), 'days', true) > 1;
}