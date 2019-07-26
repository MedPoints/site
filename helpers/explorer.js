const moment = require('moment');

exports.prepareBlockData = (block, index, chainLength) => {
    return {
        ...block,
        date: moment(new Date(block.Time)).format('HH:mm DD.MM.YYYY'),
        created: moment(new Date(block.Time)).fromNow(),
        height: chainLength - index,
        transactionsCount: block.Transactions.length,
    }
};
