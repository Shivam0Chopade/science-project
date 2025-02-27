let beepSound = new Audio("beep-beep-beep-beep-80262.mp3");
let instructionText = document.getElementById("instruction");
let activateBtn = document.getElementById("activateBtn");
let resetBtn = document.getElementById("resetBtn");
let gameVideo = document.getElementById("gameVideo"); // Get video element

let beepInterval;

// Function to play beep sound continuously
function playBeepSound() {
    beepInterval = setInterval(() => {
        beepSound.currentTime = 0;
        beepSound.play();
    }, 2000);
}

// Function to stop beep sound
function stopBeepSound() {
    clearInterval(beepInterval);
    beepSound.pause();
    beepSound.currentTime = 0;
}

// Function to start experiment
function startExperiment() {
    instructionText.innerHTML = "Verifying your Eyes.....";

    activateBtn.style.display = "none";
    resetBtn.style.display = "inline-block";

    if (gameVideo) {
        gameVideo.currentTime = 0; // Restart video
        gameVideo.play(); // Play video
    }

    setTimeout(() => {
        instructionText.innerHTML = "Beep, Beep, Beep"; 
        playBeepSound(); 

        setTimeout(() => {
            instructionText.innerHTML = "Changing lane...";

            setTimeout(() => {
                instructionText.innerHTML = "Slowing down your car...";

                setTimeout(() => {
                    instructionText.innerHTML = "Your car has stopped.";
                    sendEmergencyAlert(); // 🚨 Trigger emergency alert on second page

                }, 3000);

            }, 3000);

        }, 3000);

    }, 10000); 
}

// Function to reset experiment
function resetExperiment() {
    instructionText.innerHTML = "Your car has stopped. Stay alert and drive safely! 😊";
    
    stopBeepSound();

    if (gameVideo) {
        gameVideo.pause(); // Stop video
        gameVideo.currentTime = 0; // Reset video to start
    }

    activateBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
}

// Function to send emergency alert after 20 seconds
function sendEmergencyAlert() {
    setTimeout(() => {
        sessionStorage.setItem("alertTriggered", "true");
        console.log("🚨 Emergency alert stored!");
    }, 20000);
}
