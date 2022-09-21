


const timeline = gsap.timeline({
    paused: true,
});

timeline

.to('.box', {
    x: -20,
    stagger: {
        amount: 0.5,
        from: 'center',
        grid: 'auto',
        ease: 'power5.inOut',
        repeat: -1,
        scale: 1.2, 
        yoyo: true

    }
})


const playButton = document.getElementById('btnPlay');

playButton.addEventListener('click', () => {
    timeline.play();
});

