window.localizer = (function() {
    var self = this;
    self.getLocalizationString = function (dictPath) {
        var localizedString = '';

        var currentObj = window.dictionary;
        var dictParts = dictPath.split('.')
        if (dictParts) {
            for (var i = 0, length = dictParts.length; i < length; i++) {
                if (!currentObj) continue;
                var key = dictParts[i];
                currentObj = currentObj[key];
                localizedString = currentObj;
            }
        }
        
        if (!localizedString) {
            localizedString = '';
        }

        return localizedString;
    };

    self.localize = function (dictPath, params) {
        let localizedString = self.getLocalizationString(dictPath);
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    localizedString = localizedString.replace(`{${key}}`, params[key]);
                }
            }
        }
        return localizedString;
    }

    return {
        localize: localize
    };
})();