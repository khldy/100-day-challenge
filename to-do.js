const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const themeToggle = document.getElementById('theme-toggle');
const listIcon = document.getElementById("list-icon");

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    updateFooterColor();
    if(listIcon.src.includes("images/list-icon-light.png")) {
        listIcon.src = "images/list-icon-dark.png";
    } else {
        listIcon.src = "images/list-icon-light.png";
    }
});

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
} 

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();