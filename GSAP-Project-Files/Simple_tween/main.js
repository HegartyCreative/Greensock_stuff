
// TweenMax .to($('.circle'), 1, {x: 150, y: 150, backgroundColor: 'blue'});
// TweenMax .to($('.square'), 1, {x: -300, y: -300, backgroundColor: 'green', scale: .5, delay: 1, ease: Back.easeOut});
// TweenMax .from($('#rectangle'), 1, {x: -100, y: -150, rotation: 180, backgroundColor: 'lightblue', scale: .7, delay: 2, ease: Back.easeIn});


// TweenMax .to($('li:last-child'), 1, {x: 150, y: 150, delay: 3});
// TweenMax .to($('li:nth-child(2)'), 1, {x: -150, y: -150, delay: 4});

// TweenMax .to($('li:nth-child(odd)'), 1, {x: -150, y: -150, delay: 3});

// TweenMax .to($('li:nth-child(even)'), 1, {x: -150, y: -150, delay: 3});

// var tlanimation = new TimelineMax();

// tlanimation.to('.circle', 1, {x: 100, ease: Power4.easeOut})
// .to ('.square', 1, {x: 100, ease: Power4.easeOut})
// .to ('#rectangle', 1, {x: 100, ease: Power4.easeOut});

// tlanimation.to('.circle', 1, {x: 100, ease: Power4.easeIn})
// .to ('.square', 1, {x: 100, ease: Power4.easeIn})
// .to ('#rectangle', 1, {x: 100, ease: Power4.easeIn});


// tlanimation.to('.circle1', 1, {x: 100, ease: Back.easeIn})
// .to ('.square1', 1, {x: 100, ease: Back.easeIn})
// .to ('#rectangle1', 1, {x: 100, ease: Back.easeIn});

// tlanimation.to('.circle1', 1, {x: 100, ease: Elastic.easeIn})
// .to ('.square1', 1, {x: 100, ease: Elastic.easeIn})
// .to ('#rectangle1', 1, {x: 100, ease: Elastic.easeIn});

// tlanimation.to('.circle1', 1, {x: 100, ease: Bounce.easeOut})
// .to ('.square1', 1, {x: 100, ease: Bounce.easeOut})
// .to ('#rectangle1', 1, {x: 100, ease: Bounce.easeOut});


// TweenMax.staggerFrom('.blue', 1, {x: 100, y: 100, opacity: 0, ease: Bounce.easeOut}, 0.1);

// TweenMax.staggerFrom('.blue', 1, {x: 100, y: 100, ease: Back.easeOut}, 0.1);

// TweenMax.set('.blue', {x: -100});

// With set there is no Animation, it disappears and appears

// var tlmove = new TimelineMax({repeat: 3, repeatDelay: 4});

// tlmove.to('.blue', 1, {x: 100})
//     .to('.blue', 1, {x: -100})
// ;

// Animation moves from one position to another and back again (with repeat; -1 means it is a continual loop. Then adding repeatDelay: 4)

var tlmove = new TimelineMax({repeat: -1, yoyo: true});

tlmove.to('.blue', 1, {x: 100})
;

