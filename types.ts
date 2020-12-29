//Create Variable
let myString: string;
myString = 'String Variable Created in TS with type string'; //concatenated string using + operator
console.log(myString);

//Create variable 2
let myNum: number;
myNum = 22;  //can use positive or negative number or decimal number or hexadecimal number
console.log(myNum);

//Variable 3
let myBool:boolean = true;
console.log(myBool)

//Variable 4
let myVar:any="can be anything number,booleanor number type";
console.log(myVar);
//TYPE1:ARRAY
        // String Array 
        let strArr: string[]; //Array of String
        strArr = ["a","e","i","o","u"];
        console.log(strArr);

        //Number Array
        let numArr:number[];
        numArr=[2,4,6,8];
        console.log(numArr);
        //Boolean array
        let myBoolArr:boolean[];
        myBoolArr=[true,false];
        console.log(myBoolArr);

//Type2 -ARRRAY

                //String array
                let stringArray: Array<string>;
                stringArray=["a","b","c"];

                // and similar to other

//Tuple
let stringNumTuple: [string]