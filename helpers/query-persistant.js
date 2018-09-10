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

    renderParamsInputs(parameters) {
        var render = '';
        for (let parameter in parameters) {
            render += `<input type="hidden" name="${parameter}" value="${parameters[parameter]}" />`
        }
        return render;
    }

    isAppliedParameter(url) {
        return url.indexOf('?') >= 0;
    }
}

exports.queryPersistant = new QueryPersistant();