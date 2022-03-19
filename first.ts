// console.log("Hello Typescript");
// const a=5;
// const b=a+7;
// console.log("The output is: ",a+b);
// const myName="Faisal"
// console.log(myName);

// Type

// first code 
// let studentName = 'Faisal';
// let studentId=5;
// let goSchool=true;
// console.log('My name is '+studentName+ ' and my id is '+studentId+' and go school? ans:  '+goSchool);

// second code 
// No problem, because let diye ami variable assign koresi but value set kori nai.
// let officeName;
// officeName='IT firm'
// officeName=50000;
// console.log(officeName);

// third code , actual ts
// let bookId: number= 1;
// let bookName: string = "javascript my sleep"
// let bookBuy: boolean = true;

// console.log(bookId,bookName,bookBuy);


function myFunc(first:number,second:number):number {
    const result=first+second;
    return result;
}
const value=myFunc(4,6);
console.log(value);


