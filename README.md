# `Getting started typeScript` 


### `install` 
```javascript
npm install typescript --save-dev

```



### `compiling ts file` 

#### `if you have single ts file, then try it`

after compile, you get a js file, then connect js file instead of ts file.

```javascript
npx tsc fileName.js

```

#### `if you have multiple ts file, then try it`

after compile, you get a tsconfig.json ,

```javascript
npx tsc --init

```

#### `In every edit in your code, you have to re-compile`
```javascript
npx tsc fileName.js

```

#### `Output/ outdir Path change`

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

---

### `Type`
#### `number`  `string`  `boolean` 
```typescript
// Type

// first code 
let studentName = 'Faisal';
let studentId=5;
let goSchool=true;
console.log('My name is '+studentName+ ' and my id is '+studentId+' and go school? ans:  '+goSchool);

// second code 
// No problem, because let diye ami variable assign koresi but value set kori nai.
let officeName;
officeName='IT firm'
officeName=50000;
console.log(officeName);

// third code , actual ts
let bookId: number= 1;
let bookName: string = "javascript my sleep"
let bookBuy: boolean = true;

console.log(bookId,bookName,bookBuy);

```


#### `function` 
```typescript
function myFunc(first:number,second:number):number {
    const result=first+second;
    return result;
}
const value=myFunc(4,6);
console.log(value);

```

#### `union` 
```typescript
function unionType(first: number | string ,second: number| string):number | string{
    let addition= first;
    return addition;
}
console.log(unionType(4," Faisal"));

```









