// localization object
window.localizer = (function() {
    var self = this;
    // gets a string from the localization dictionary
    self.getLocalizationString = function (dictPath) {
        var localizedString = '';

        var currentObj = window.dictionary;
        // recursively iterates over dictionary path
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
          var currentObj = window.backupDictionary;
          // recursively iterates over dictionary path
          var dictParts = dictPath.split('.')
          if (dictParts) {
            for (var i = 0, length = dictParts.length; i < length; i++) {
              if (!currentObj) continue;
              var key = dictParts[i];
              currentObj = currentObj[key];
              localizedString = currentObj;
            }
          }
        }

        if (!localizedString) {
            localizedString = '';
        }

        return localizedString;
    };

    self.localize = function (dictPath, params) {
        let localizedString = self.getLocalizationString(dictPath);
        // checks if any parameters were passed to the localization string
        // if any parameter with the corresponding name is encountererd
        // {param}, it is replaced with a parameter value
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    localizedString = localizedString.replace(new RegExp(`{${key}}`, 'g'), params[key]);
                }
            }
        }
        return localizedString;
    }

    return {
        localize: localize
    };
})();

function setLocale(locale) {
    Cookies.set('locale', locale);
    window.location.reload();
}