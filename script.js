let metronomeInterval;
let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF9933', '#33FFF5'];
Audio('Click.mp3');

document.getElementById('start').addEventListener('click', function() {
    const bpm = document.getElementById('bpm').value;
    const interval = 60000 / bpm; // milliseconds per beat
    clearInterval(metronomeInterval);
    let colorIndex = 0;

    metronomeInterval = setInterval(function() {
        playClick();
        colorIndex = (colorIndex + 1) % colors.length;
        document.getElementById('circle').style.backgroundColor = colors[colorIndex];
    }, interval);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(metronomeInterval);
    document.getElementById('circle').style.backgroundColor = '#ccc'; // reset to neutral
});

function playClick() {
    console.log('Click');
    // Add sound functionality here if desired (for example, using an audio API)
}
