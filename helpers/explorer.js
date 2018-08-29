const moment = require('moment');

exports.prepareBlockData = (block, index, chainLength) => {
    return {
        ...block,
        created: moment(new Date(block.Time)).fromNow(),
        height: chainLength - index,
        transactionsCount: block.Transactions.length,
    }
};
