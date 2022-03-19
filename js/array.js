"use strict";
let salary = 45000;
let friendSalary = [20000, 56000, 32000, 65444, 23000];
friendSalary.push(47000);
friendSalary[0] = 11111;
console.log(friendSalary);
const myName = "Faisal";
const friendName = ['Sakib', "Forid", "kecha"];
friendName.push('universal');
friendName[0] = 'Alam';
console.log("my Name is : ", myName);
console.log("frindlist: ", friendName);
// find max salalry 
let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}
console.log('max salary is: ', max);
