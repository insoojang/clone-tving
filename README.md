# TVING Clone Coding


해당 프로젝트는 React 환경으로 TVING을 클론코딩하여 만든 프로젝트입니다.

##  Package use
| Name                 | Latest Version |
|----------------------|:--------------:|
| [React]()            |  [v18.0.0]()   |
| [Typescript]()       |   [v4.9.4]()   |     
| [TailwindCSS]()      |   [v3.2.4]()   |     
| [React-Router-dom]() |   [v6.6.1]()   |     
| [Framer-motion]()    |   [Latest]()   |     
| [MUI]()              |   [Latest]()   |     
| [React Query]()      |   [Latest]()   |     
| [TMDB]()             |   [Latest]()   |     


## 프로젝트 환경 구성

1. 프로젝트 폴더 생성
2. React + Typescript 설치 :  `npx create-react-app@latest 파일명 --template typescript`
3. React-route-dom 설치 : `npm install react-router-dom @types/react-router-dom`
4. Tailwind 설치 : `npm install -D tailwindcss` `npx tailwindcss init`
5. eslint, prettier 설치 : `npm install -D eslint prettier`
6. Typescript관련 eslint, prettier 설치 : `npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`
7. 기타 플러그인 설치 : `npm install -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks`
8. .eslintrc 생성 및 세팅 : 
```text
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "ignorePatterns": ["node_modules/"],
  "plugins": ["prettier", "@typescript-eslint"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "tabWidth": 4,
        "useTabs": false,
        "printWidth": 80,
        "trailingComma": "all",
        "semi": false,
        "singleQuote": true,
        "jsxSingleQuote": false,
        "arrowParens": "always",
        "bracketSpacing": true,
        "jsxBracketSameLine": false
      }
    ]
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  }
}
```
09. .prettierrc 생성 및 세팅
```text
  {
        "tabWidth": 4,
        "useTabs": false,
        "printWidth": 80,
        "trailingComma": "all",
        "semi": false,
        "singleQuote": true,
        "jsxSingleQuote": false,
        "arrowParens": "always",
        "bracketSpacing": true,
        "jsxBracketSameLine": false
      }
```
10. tailwind.config.js 수정
```text
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}; 
```
11. src/styles/Global.css에 tailwind 전체 import
```css
@tailwind base;
@tailwind components;
@tailwind utilities; 
```
12. Webstorm or Vscode 환경설정에서 eslint, prettier 적용

