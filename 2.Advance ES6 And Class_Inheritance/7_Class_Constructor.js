class Support{
   name;
    role='web developer';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }

    startSession(){
        console.log(this.name,"Start session at 10pm")
    }
}

const result1 = new Support("shamuel","Dhaka");
console.log(result1);  
result1.startSession()


const rs = new Support("rashidaSultana", "mirpur");
rs.startSession();
 