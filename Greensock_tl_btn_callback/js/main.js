

const runStart = () => {
    console.log('onStart')
}

// Start an action when the animation is completed; see below

const runComplete = () => {
    console.log('onComplete')
}

const timeline = gsap.timeline({
    paused: true,
    onStart: runStart,
    onComplete: runComplete
});

timeline

.to('.ball', {
    x: 200,
})

.to('.ball', {
    y: 200,
})

.to('.ball', {
    x: 5,
})

.to('.ball', {
    y: 390,
})


.to('.ball', {
    x: 250,
})

.to('.ball', {
    y: 10,
})


.to('.ball', {
    x: 0,
})



const playButton = document.getElementById('btnPlay');
const playPause = document.getElementById('btnPause');
const playResume = document.getElementById('btnResume');
const playReverse = document.getElementById('btnReverse');
const playSpeedUp = document.getElementById('btnSpeedUp');
const playSlowDown = document.getElementById('btnSlowDown');
const playRestart = document.getElementById('btnRestart');

playButton.addEventListener('click', () => {
    timeline.play();
});

playPause.addEventListener('click', () => {
    timeline.pause();
});

playResume.addEventListener('click', () => {
    timeline.resume();
});

playReverse.addEventListener('click', () => {
    timeline.reverse();
});

playSpeedUp.addEventListener('click', () => {
    timeline.timeScale(2);
});

playSlowDown.addEventListener('click', () => {
    timeline.timeScale(0.5);
});

playRestart.addEventListener('click', () => {
    timeline.restart();
});







