
interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
     email: string;
     age: number;

    constructor(name: string,email:string,age:number){
    this.name = name;
    this.email = email;
    this.age = age;
    

    console.log("User Created"+ this.name);

    }

    //Method creation
    //Can make it private,protected or public

    register(){
        console.log(this.name+ ' is registerd');
    }

    payInvoice(){
        console.log(this.name + 'paid Invoice')
    }
}

let john = new User('Joh Doe','Johndoe@gmail.com',45);


john.register();

//Inheritance
class Member extends User{
    id: number;

    constructor(id:number,name: string,email:string,age:number){
    super(name,email,age);
    this.id = id;
    }

    payInvoice(){
        super.payInvoice()
    }

}

let Mike: User = new Member(1,'Mike smith','mike@gmail.com',45);
Mike.payInvoice();