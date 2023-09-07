const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //from here is to add the x part
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    //this is to clear the input value so that you can write your next one after pressing add
inputBox.value ='';

saveData(); 

}
//javascript for the click function
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    //IF THE TAGNAME OR THE AREA I SELECTED IS FOR LI THEN IT WILL
    //TOGGLE BETWEEN THE CHECEKED CLASS
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    // IF THE AREA SELECTED WAS FOR THE SPAN THEN IT WILL REMOVE THAT PARENT ELEMENT
    //AND THE PARENT ELEMENT FOR SPAN IS LI.
    e.target.parentElement.remove();
    saveData();
}

},false);

function saveData(){
    //this is to save the data in the browser
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){//this will display the data when we open the browser again
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();



