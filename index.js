let image =document.getElementById('ch');
let a=document.getElementById('ab');
image.addEventListener('click',fun1);
image.addEventListener('dblclick',fun2);

 function fun1(){
    document.getElementById('iim').src=a.src;
    console.log("hiii");
}
function fun2(){
    document.getElementById('iim').src=document.getElementById('iim2').src;
    console.log("bye");
}