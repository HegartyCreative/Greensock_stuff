


const timeline = gsap.timeline({defaults: {duration: 0.5}})
timeline
.from('.header', {y: -200, ease: "bounce"})
.fromTo('.link',{scale: 1, opacity: 0}, {opacity: 1, stagger: 0.5, scale: 1.2})
.from('.left', {x: -200, ease: "bounce"})
.from('.right', {x: 200, ease: "bounce"}, "<")
// So using "<" means the right will come in at the same time as the left
.from('.footer', {y: 200, ease: "bounce"})
.fromTo('.button', {scale: 0}, {rotation: 360, scale: 2, ease: 'Power4.in'}), "<0.5"; 
// So 0.5 secs after the footer


// Then you can reverse the animation

const button = document.querySelector ('.button')

button.addEventListener ('click', () =>{
    // timeline.timeScale(3) This speeds up the reverse animation 3 times
    timeline.reverse()
})
