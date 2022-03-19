# `Getting started typeScript` 


### `install` 
```javascript
npm install typescript --save-dev

```



### `compiling ts file` 

`if you have single ts file, then try it`

after compile, you get a js file, then connect js file instead of ts file.

```javascript
npx tsc fileName.js

```

`if you have multiple ts file, then try it`

after compile, you get a tsconfig.json ,

```javascript
npx tsc --init

```

`In every edit in your code, you have to re-compile`
```javascript
npx tsc fileName.js

```

`Output/ outdir Path change`

- 1. go to tsconfig.json file and change the outdir,

```javascript
"outDir": "./js",

```
- 2. change path in index.js

```javascript
<script src="./js/first.js"></script>

```

- 3. then, recompile it, now don't need to give path name, just npx tsc,

```javascript
npx tsc

```


 

