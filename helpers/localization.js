const fs = require('fs');
const DEFAUL_LOCALE = 'en';

class Localization {
    constructor(locale) {
        this.locale = locale || DEFAUL_LOCALE;
        this.dictionary = JSON.parse(fs.readFileSync(`./public/data/lang/${locale}.json`, 'utf8'))
    }

    getLocalizationString(dictPath) {
        var localizedString = '';

        var currentObj = this.dictionary;
        dictPath.split('.').forEach(key => {
            if (!currentObj) return;
            currentObj = currentObj[key];
            localizedString = currentObj;
        });

        if (!localizedString) {
            localizedString = '';
        }

        return localizedString;
    }

    localize(dictPath, params) {
        let localizedString = this.getLocalizationString(dictPath);
        if (params) {
            Object.keys(params).forEach(key => {
                localizedString = localizedString.replace(`{${key}}`, params[key]);
            }); 
        }

        return localizedString;
    }
}

exports.DEFAUL_LOCALE = DEFAUL_LOCALE;
exports.localization = new Localization(DEFAUL_LOCALE);