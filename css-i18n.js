var fs = require('fs');

const translations = require('./translations.json');

const fallbacks = translations["fallbacks"];

const cssObject = {};
Object.keys(translations["translations"]).forEach((translationKey) => {
    Object.keys(fallbacks).forEach((locale) => {
        cssObject[`.${locale} ${translationKey}`] = fallbacks[locale].map((localeKey) => translations["translations"][translationKey][localeKey]).reduce((acc, val) => acc || val);
    });
});

const cssString = Object.keys(cssObject).map((selector) => `${selector}:after {content: "${cssObject[selector]}";}`).join('\n');

fs.writeFile('i18n.css', cssString, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
