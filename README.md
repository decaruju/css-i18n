# CSS-I18N

css managed translations of a page.

- All translations are static, no js code is running find translations
- Locale is decided by a class on a parent element, the class fr on the body makes the page in french
- Translation keys are css selectors
- Specificity can be used to customize translations based on context, a next button can have the text "confirm" when in a certain page
- The i18n.css file is generated by a node script based on a translations.json file
