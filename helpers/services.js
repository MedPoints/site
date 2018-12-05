const higlight = require('./text-highlighter');

exports.prepareServiceData = (service, options) => {
    if (options && options.search) {
        service.name = higlight(service.name, options.search);
    }

    return {
        ...service
    };
};