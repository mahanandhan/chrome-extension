let myLead = [];
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value);
    inputEl.value = "";
    renderLead();
})
function renderLead(){
    let listElement = '';
    for(let i = 0; i < myLead.length; i++){
        listElement += "<li><a target = '_blank' href = '"+ myLead[i] +"'>" + myLead[i] + "</a></li>";
    }
    ulEl.innerHTML = listElement;
}