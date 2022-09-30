function message (name,handle){
    handle(name)
}

function greet(name){
    console.log("Welcome",name)
}
message("Sam",greet);