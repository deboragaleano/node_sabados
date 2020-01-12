function a(){
    console.log(var1);
    var var1 = 10;
    /*El motor lo convierte a:
    var var1;
    console.log(var1);
    var1 = 10;
    */
}
a();

function b(){
    console.log(var2);
    let var2 = 20;
}
b();
