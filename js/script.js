const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector(".row button");


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let item = document.createElement("li");
        item.innerHTML = inputBox.value;
        listContainer.appendChild(item);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    };
    inputBox.value = "";
};
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    };
});