# i18n Locales

## Explanation

This directory contains the translation files for the project. YAML files in this folder will be loaded automatically and registered with their filenames as locale code.

All YAML files in this folder should be named according to the [BCP 47](https://tools.ietf.org/html/bcp47) standard. For example, `en-US.yaml` or `zh-CN.yaml`.

## Adding a new locale

If you want to add a new locale, you should copy the `en-US.yaml` file and rename it to the locale code of the new language. Then, translate all the strings in the new file. A full list of accepted language tags can be found [here](https://www.techonthenet.com/js/language_tags.php).

## Details

Check out [`vue-i18n`](https://github.com/intlify/vue-i18n-next) for more details.

If you are using VS Code, [`i18n Ally`](https://github.com/lokalise/i18n-ally) is recommended to make the i18n experience better.
