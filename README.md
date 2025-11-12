# 🐼 FamilyTree

Chinese family terms can be complex, reflecting centuries of cultural values around hierarchy, age, and kinship. 

For example, in English you might call both your mother’s sister and your father’s sister “aunt”, but in Chinese languages, each could have a distinct term that reflects not only which side of the family she’s on, but sometimes even her relative age!

This interactive Vue app (with TS, Tailwind, & [family-chart](https://github.com/donatso/family-chart)) makes exploring and learning Chinese family terms simpler.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)

## Features

- Dark/light mode
- Integration with browser speech synthesis (Web Speech API) for pronunciation audio
- Multiple language/reading/phonetic options:

| Feature | Options |
|---|---|
| Characters | Simplified, Traditional |
| Languages | Cantonese, Mandarin |
| Phonetics | Cantonese (Jyutping, Yale), Mandarin (Pinyin, Zhuyin) |

## Setup

Versions:
```
Node: 24.9.0
NPM: 11.6.0
```

Install:
```bash
npm i
```

To run the app locally with hot-reload:
```bash
npm run dev
```

To compile and minify:
```bash
npm run build
```

To lint:
```bash
npm run lint
```

## Report a bug

Found a bug or something not working as expected? 🐛 Help improve the project by opening an issue! 

For terminology-related issues, please include external sources or citations to support your suggestion.