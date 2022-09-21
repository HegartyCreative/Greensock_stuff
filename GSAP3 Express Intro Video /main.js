
// gsap.to('.star', {x: 1000, y: 200, rotation: 360, scale: 3, duration: 3});

// gsap.to('.star', {x: 500, duration: 2});
// gsap.to('.star1', {x: 500, duration: 2, repeat: -1, yoyo:true});


// gsap.to('.star', {x: 500, duration: 2, ease: 'back(3)'});
// gsap.to('.star1', {x: 500, duration: 2, ease: Power4.easeOut});

// 3 is the overshoot value

// Using the stagger animation tool
// gsap.to('.image img', {x: 500, duration: 2, stagger: 0.1, ease: "bounce"});

// Using the stagger animation tool - more complex
// gsap.to('.image img', {x: 500, duration: 2, stagger:{
//     each: 0.2
// }});


// Using the stagger animation tool - animations spread over 1 second
// gsap.to('.image img', {x: 500, duration: 2, stagger:{
//     amount: 1
// }});


// Using the stagger animation tool - with a different start point
// gsap.to('.image img', {x: 500, ease: "bounce", stagger:{
//     each: 0.1, 
//     from: "center"
//     from: "end"
// }});


gsap.from('.time img', {x: 200, duration: 1});

gsap.fromTo('h1', {opacity: 0,}, {opacity: 1, duration: 1, scale: 1.3, delay: 1});

gsap.fromTo('.stars img', {scale: 0, opacity: 0}, {duration: 1, opacity: 1, y: -100, delay: 2, stagger: 0.2, scale: 1});

