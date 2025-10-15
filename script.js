const popContainer = document.querySelector("#popContainer");
const showPopButton = document.querySelector("#showPop");
const taskButton = document.querySelector("#taskButton");
const taskListen = document.querySelector("#taskList");
const taskText = document.querySelector("#taskText");

showPopButton.addEventListener("click", () => {
    popContainer.classList.toggle("hidden");
});

taskButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    
    const taskItem = document.createElement("li");
    const taskTextSpan = document.createElement("span");
    const taskDelete = document.createElement("button");

    taskTextSpan.textContent = taskText.value;
    taskDelete.textContent = "KillColor";

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(taskDelete);
    
    taskListen.appendChild(taskItem);
})