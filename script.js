// script.js

let intervalID;
let isPlaying = false;

// Function to start the metronome
function startMetronome() {
  const bpm = document.getElementById('bpm').value;
  const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds interval

  const beatIndicator = document.getElementById('beat-indicator');
  let isBeat = false;

  // Start the interval for the beats
  intervalID = setInterval(() => {
    isBeat = !isBeat;
    if (isBeat) {
      beatIndicator.classList.add('active-beat'); // Change color for active beat
      playClickSound(); // Play sound for beat (optional)
    } else {
      beatIndicator.classList.remove('active-beat');
    }
  }, interval);

  // Disable start button and enable stop button
  document.getElementById('start-button').disabled = true;
  document.getElementById('stop-button').disabled = false;
  isPlaying = true;
}

// Function to stop the metronome
function stopMetronome() {
  clearInterval(intervalID);
  document.getElementById('beat-indicator').classList.remove('active-beat');
  
  // Enable start button and disable stop button
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  isPlaying = false;
}

// Optional: Function to play click sound for each beat
function playClickSound() {
  const click = new Audio('click-sound.mp3'); // Add your click sound file
  click.play();
}

// Event listeners for buttons
document.getElementById('start-button').addEventListener('click', startMetronome);
document.getElementById('stop-button').addEventListener('click', stopMetronome);
