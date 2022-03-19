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

