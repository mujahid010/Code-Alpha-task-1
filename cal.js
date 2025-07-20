const result = document.getElementById("result")

function display(value) {
    result.value += value;
}
function clearscreen() {
    document.getElementById("result").value = "";
}
function cal() {
   let a = document.getElementById("result").value ;
   let b = eval(a);
    document.getElementById("result").value = b;
}
function del(){
    let string = "";
    
    let m= document.getElementById("result").value ;
    let n = m.substring(0,m.length-1);
    document.getElementById("result").value =n;
}
let turn =true;
const color = document.getElementById("ac_btn");
const aa=color.value;
color.addEventListener("click",()=>
{
    
        color.style.backgroundColor="aqua";
         aa.innerText="hello";
    
    
    
})
