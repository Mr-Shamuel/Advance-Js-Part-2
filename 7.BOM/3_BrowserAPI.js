// 1.shwo output after 3.5 seconds 
const timer =()=>{
   const res =  setInterval(() => {
        console.log("Final result ");
        clearInterval(res);
    }, 3500);

    
}
timer();

// 2. take a input using prompt and add 200. then alert that result.

const number  = parseInt(prompt("Enter a number : "));
const add=(n)=>
{
    const res = number +n;
    alert(res);
}
add(200);

// 3  do you want to see the href. if ok . console.log href ;


const decision = confirm("Do you want to see the href ?");
decision ? console.log(location.href) : console.log(" It's okay 🙂")



 