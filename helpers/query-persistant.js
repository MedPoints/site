const qs = require('qs');

class QueryPersistant {
    constructor() {
        this.applyRequestQueryParameters = this.applyRequestQueryParameters.bind(this);
        this.isAppliedParameter = this.isAppliedParameter.bind(this);
    }

    applyRequestQueryParameters(parameters, baseUrl) {
        let updatedUrl = baseUrl;
        for (let parameter in parameters) {
            if (typeof parameters[parameter] === 'object') {
                const nestedParametersObject = parameters[parameter]
                for (let nestedParameter in nestedParametersObject) {
                    const nestedParameterString = `${parameter}[${nestedParameter}]`;
                    if (updatedUrl.indexOf(nestedParameterString) < 0) {
                        updatedUrl += (this.isAppliedParameter(updatedUrl) ? '&' : '?') + encodeURI(`${nestedParameterString}=${parameters[parameter][nestedParameter]}`);
                    }
                }
            } else {
                if (updatedUrl.indexOf(parameter) < 0) {
                    updatedUrl += (this.isAppliedParameter(updatedUrl) ? '&' : '?') + `${parameter}=${parameters[parameter]}`;
                }
            }
            
        }
        //let updatedUrl = baseUrl + (this.isAppliedParameter(baseUrl) ? '&' : '?') + qs.stringify(parameters);
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