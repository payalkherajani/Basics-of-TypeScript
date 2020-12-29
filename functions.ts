//Normal Function
function sum(num1,num2):number{
    return num1+num2;
}
console.log(sum(1,2));

//Arguments have a type
function numSum(num1:number, num2: number): number{
    return num1+num2;

}
console.log(numSum(4,5));

//Assigning function to a variable(Function Expression)

let mySum = function(num1: any,num2:any):number{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1+num2;
}
console.log(mySum("4",2));


//? ->Optional

function getName(firstName: string,lastName?:string):string{
    return firstName + ' ' + lastName;
}

console.log(getName('John','Doe'))


//Function return void

function myVoid(): void{
    return;
}

