
const messagesDiv = document.getElementById("messages");

function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim();
    if (!userMessage) return;

    appendMessage("user", userMessage);
    input.value = "";

    // Simulate bot response
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        appendMessage("bot", botMessage);
    }, 800);
}

function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = `${sender === 'user' ? 'You' : 'Bot'}: ${text}`;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(userInput) {
    if (userInput.toLowerCase().includes("support")) {
        return "Can you please describe the issue you're facing?";
    } else if (userInput.toLowerCase().includes("internet")) {
        return "Is the issue with a slow connection or a complete outage?";
    } else {
        return "Thank you for the message. A support representative will email you shortly.";
    }
}
