const inputBar = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listTag = document.getElementById("list-container");
const delButton = document.getElementById("delete-button");


delButton.addEventListener("click", () => {
    removeAll();
})

function removeAll() {
    document.getElementById("list-container").innerHTML = "";
}

addButton.addEventListener("click", () => {
    if (inputBar.value === '') {
        alert("You must write something!");
    }
    else {
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBar.value;
        listTag.appendChild(listItem);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    inputBar.value = "";
    saveData();
})

inputBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {

        if (inputBar.value === '') {
            alert("You must write something!");
        }
        else {
            let listItem = document.createElement("li");
            listItem.innerHTML = inputBar.value;
            listTag.appendChild(listItem);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            listItem.appendChild(span);
        }
        inputBar.value = "";
        saveData();
    }
})


document.getElementById("add-button").addEventListener('keypress', function (e) {
    // const code = (e.keyCode ? e.keyCode : e.which);
    if (e.key === 'Enter') {
        saveData();
        e.preventDefault();
    }
});

listTag.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listTag.innerHTML);
}

function showTask() {
    listTag.innerHTML = localStorage.getItem("data");
}
showTask();


