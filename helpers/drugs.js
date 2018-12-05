const higlight = require('./text-highlighter');

exports.prepareDrugData = (drug, options) => {
    if (options && options.search) {
        drug.name = higlight(drug.name, options.search);
    }

    return {
        ...drug
    };
};