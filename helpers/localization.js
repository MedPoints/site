const fs = require('fs');
const DEFAUL_LOCALE = 'en';

class Localization {
    constructor(locale) {
        this.locale = locale;
        this.dictionary = JSON.parse(fs.readFileSync(`./public/data/lang/${locale}.json`, 'utf8'))
    }

    localize(dictPath, _locale) {
        var localizedString = '';
        var locale = _locale || this.locale;

        var currentObj = this.dictionary;
        dictPath.split('.').forEach(key => {
            currentObj = currentObj[key];
        });

        if (typeof currentObj === 'string') {
            return currentObj;
        }

        return localizedString;
    }
}

exports.DEFAUL_LOCALE = DEFAUL_LOCALE;
exports.localization = new Localization(DEFAUL_LOCALE);