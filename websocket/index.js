const socket = io("http://localhost:3003");

const form = document.getElementById("form");
const input = document.getElementById("input");
const chatWindow = document.getElementById("chat-window");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    console.log(input.value);
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  let element = document.createElement("p");
  element.textContent = msg;
  chatWindow.appendChild(element);
});
