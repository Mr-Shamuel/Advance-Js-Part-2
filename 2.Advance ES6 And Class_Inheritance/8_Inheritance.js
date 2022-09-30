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


 class StudentCare extends Support{
    

    buildAroutine(s){
        console.log(this.name,"please Build a Routine")
    }
 }
 const rs = new Support("rashidaSultana", "mirpur");
rs.startSession();
const sam = new StudentCare("shamuel","MOhammadpur");
sam.buildAroutine();
 