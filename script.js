const socket = io();

function sendMessage() {
    const input = document.getElementById("input");
    const message = input.value;

    socket.emit("chat message", message);
    input.value = "";
}

// Message receive
socket.on("chat message", (msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messages").appendChild(li);
});