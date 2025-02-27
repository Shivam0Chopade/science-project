// Function to register user details
function registerUser() {
    let userName = document.getElementById('userName').value;
    let carPlate = document.getElementById('carPlate').value;
    let atpNumber = document.getElementById('atpNumber').value;
    
    if (userName && carPlate && atpNumber) {
        // Store details in sessionStorage
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('carPlate', carPlate);
        sessionStorage.setItem('atpNumber', atpNumber);
        sessionStorage.setItem('chatHistory', ""); // Initialize chat history

        // Hide form and show chat screen
        document.querySelector('.content').style.display = 'none';
        document.getElementById('chatBox').style.display = 'block';

        // Start the automatic message timer
        setTimeout(receiveEmergencyMessage, 35000); // 35 seconds delay
    } else {
        alert('Please enter all details');
    }
}

// Function to receive emergency message
function receiveEmergencyMessage() {
    let chatBox = document.getElementById("chatMessages");

    // Restore chat history
    if (sessionStorage.getItem("chatHistory")) {
        chatBox.innerHTML = sessionStorage.getItem("chatHistory");
    }

    // Get stored user details
    let name = sessionStorage.getItem("userName") || "Unknown User";
    let plate = sessionStorage.getItem("carPlate") || "Unknown Plate";
    let atp = sessionStorage.getItem("atpNumber") || "Unknown ATP";

    let message = `<b>🚨 Emergency Alert!</b><br>Owner: ${name}<br>Car: ${plate}<br>ATP: ${atp}`;

    // Add message to chat
    chatBox.innerHTML += `<p>${message}</p>`;
    sessionStorage.setItem("chatHistory", chatBox.innerHTML);
}

// Run when page loads
window.onload = function () {
    let chatBox = document.getElementById("chatMessages");

    // Restore previous chat messages if available
    if (sessionStorage.getItem("chatHistory")) {
        chatBox.innerHTML = sessionStorage.getItem("chatHistory");
    }

    // Start emergency message timer if user is already registered
    if (sessionStorage.getItem('userName')) {
        setTimeout(receiveEmergencyMessage, 35000); // 35 seconds delay
    }
};
