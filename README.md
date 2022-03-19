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


#### `array` 
```typescript
let salary:number=45000;
let friendSalary:number[]=[20000,56000,32000,65444,23000];

friendSalary.push(47000);
friendSalary[0]=11111;

console.log(friendSalary);


const myName:string="Faisal";
const friendName:string[]=['Sakib',"Forid","kecha"];
friendName.push('universal');

friendName[0]='Alam';

console.log("my Name is : ",myName);
console.log("frindlist: ",friendName);

// find max salalry 
let max=0;
for(const salary of friendSalary){
    if(salary>max){
        max=salary;
    }   
}
console.log('max salary is: ',max);


```




#### `object` `type` 
```typescript
const student: {name:string,id:number,age:number} = {
    name: 'Kamal',
    id:1,
    age:24
}

type myCustomDataType= {id:number,name:string,age:number}

const student2: myCustomDataType = {
    id:2,
    name:'Jamal',
    age:34
}

const student3: myCustomDataType= {
    id:3,
    name:'Rumal',
    age:19
}



```


#### `arrow function` 
```typescript

function add(num1:number,num2:number){
    return num1+num2;
}

const addition = (num1:number,num2:number):number => {
    return num1+num2;
}

const doMath = (num3:number) =>{
    return num3;
}

console.log(add(2,4));
console.log(addition(12,14));
console.log(doMath(12));

```



#### `interface` 
```typescript
// interface name er first letter capital e likha convension; e.x., interface Person

interface Person {
    id:number,
    name: string,
    salary: number,
    // optional bananor jonno ? use kora hoyese. jate voter and previousAddress er value na dileyo, problem na hoy. 
    voter?: boolean
    previousAddress?: string[]
}

const person1:Person = {
    id:1,
    name:'Faisal',
    salary:15000,
    voter:true,
    previousAddress: ['Mirpur','Banani']
}

const person2:Person = {
    id:2,
    name:"Ahmed",
    salary:25000,
       
}

interface Employee extends Person {
    companyName: string,
    companyId: number
}

const jalal:Employee = {
    id:22,
    name:'Shajib',
    salary:45000,
    companyId:555,
    companyName:'ABC Limited'

}



```


#### `class` 
```typescript
class Car {
    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model
        this.price=price
    }
    getTotalPrice(tax:number):number{
        const taxAmount=this.price*tax/100;
        const total=this.price+taxAmount
        return total;
    }

}

const toyota= new Car('Toyota 200x',4500000)
const totalPrice:number=toyota.getTotalPrice(25);
console.log(totalPrice);

```









