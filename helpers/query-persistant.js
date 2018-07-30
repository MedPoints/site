class QueryPersistant {
    constructor() {
        this.applyRequestQueryParameters = this.applyRequestQueryParameters.bind(this);
        this.isAppliedParameter = this.isAppliedParameter.bind(this);
    }

    applyRequestQueryParameters(parameters, baseUrl) {
        let updatedUrl = baseUrl;
        for (let parameter in parameters) {
            if (updatedUrl.indexOf(parameter) < 0) {
                updatedUrl += (this.isAppliedParameter(updatedUrl) ? '&' : '?') + `${parameter}=${parameters[parameter]}`;
            }
        }
        return updatedUrl;
    }

    isAppliedParameter(url) {
        return url.indexOf('?') >= 0;
    }
}

exports.queryPersistant = new QueryPersistant();