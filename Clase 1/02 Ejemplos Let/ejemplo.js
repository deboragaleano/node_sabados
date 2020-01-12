function a(){
    var var1 = 1;
    console.log(var1);
    if(true){
        var var1 = 2;
        console.log(var1);
    }
    console.log(var1);
}
a();
console.log("------");
function b(){
    let var1 = 1;
    console.log(var1);
    if(true){
        console.log(var1);
        let var2 = 2;
        console.log(var2);
    }
    console.log(var1);
}
b();