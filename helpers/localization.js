const fs = require('fs');
const DEFAUL_LOCALE = 'en';

// localization class
class Localization {

    constructor(locale) {
        this.locale = locale || DEFAUL_LOCALE;
        this.dictionary = JSON.parse(fs.readFileSync(`./public/data/lang/${locale}.json`, 'utf8'));

        var backupDictionary;
        if (locale === 'en') {
          backupDictionary = this.dictionary;
        } else {
          backupDictionary = fs.readFileSync(`./public/data/lang/${DEFAUL_LOCALE}.json`, 'utf8');
        }
        this.backupDictionary = backupDictionary;
    }

    // gets a string from the localization dictionary
    getLocalizationString(dictPath) {
        var localizedString = '';

        // recursively iterates over dictionary path
        var currentObj = this.dictionary;
        dictPath.split('.').forEach(key => {
            if (!currentObj) return;
            currentObj = currentObj[key];
            localizedString = currentObj;
        });

        if (!localizedString) {
          currentObj = this.backupDictionary;
          dictPath.split('.').forEach(key => {
            if (!currentObj) return;
            currentObj = currentObj[key];
            localizedString = currentObj;
          });
        }

        if (!localizedString) {
            localizedString = '';
        }

        return localizedString;
    }

    localize(dictPath, params) {
        let localizedString = this.getLocalizationString(dictPath);
        // checks if any parameters were passed to the localization string
        // if any parameter with the corresponding name is encountererd
        // {param}, it is replaced with a parameter value
        if (params) {
            Object.keys(params).forEach(key => {
                localizedString = localizedString.replace(new RegExp(`{${key}}`, 'g'), params[key]);
            }); 
        }

        return localizedString;
    }
}

exports.DEFAUL_LOCALE = DEFAUL_LOCALE;
exports.Localization = Localization;