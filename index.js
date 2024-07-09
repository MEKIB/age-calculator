let value1=document.getElementById("input")
let butt=document.getElementById("calcu")
let spans=document.getElementById("result")
butt.addEventListener("click",calculate)
function calculate(){
    let birthdayage=value1.value;
   if(birthdayage==""){ 
    alert("please enter your birthday")
   }
   else{
    const age=getage(birthdayage);
    spans.innerText=`your age is ${age} ${age>1?" years":"year"} old`;
   }
}
function getage(value){
    const currentdate=new Date();
    const birthday=new Date(value);
    const age=currentdate.getFullYear()-birthday.getFullYear()
    const month=currentdate.getMonth()-birthday.getMonth()
    if(month<0||(month==0&&currentdate.getDate()<birthday.getDate())){
        age--;
    }
    return age;
}