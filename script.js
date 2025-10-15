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
    
    
})