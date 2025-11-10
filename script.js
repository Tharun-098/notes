const input=document.getElementById('input-box');
const list=document.getElementById('list-container');
function add() {
    if(input.value==""){
        alert("you must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        li.appendChild(sp);
    }
    input.value="";//it is for clear the input value after enter the value and click the button and add in list
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}),false;
function saveData() {
    localStorage.setItem("data",list.innerHTML);
}
function showTask() {
    list.innerHTML=localStorage.getItem("data");
}
showTask();