const moment = require('moment');

exports.prepareTransactions = (transactions) => {
    if (!transactions) return [];
    const transactionsPerDateObject = {};
    for (let i = 0, length = transactions.length; i < length; i++) {
        const transaction = transactions[i];
        const transactionDate = moment(new Date(transaction.Date)).format('yyyy-MM-dd');
        if (transactionsPerDateObject[transactionsPerDateObject]) {
            transactionsPerDateObject[transactionsPerDateObject] += 1;
        } else {
            transactionsPerDateObject[transactionsPerDateObject] = 1;
        }
    }

    return Object.entries(transactionsPerDateObject).map(([date, value]) => { return { date, value } });  
};