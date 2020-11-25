function fn1(){
    var str = document.getElementById("name").value;
    console.log(str);
    document.getElementById("paragraph").textContent = "your name is" +str;
}