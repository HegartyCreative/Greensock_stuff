
timeline = gsap.timeline()

.set('#Line1',{
    transformOrigin: 'center left 0%',
    scale: 0
})

.set('#Line2',{
    transformOrigin: 'center left 0%',
    scale: 0
})

.set('#Line3',{
    transformOrigin: 'center left 0%',
    scale: 0
})

.set('#Line4',{
    transformOrigin: 'center left 0%',
    scale: 0
})

const line = (item) => {
    let tl = gsap.timeline()
        tl.to(item, {
            scale: 1,
            duration: 2,
            stagger: {
                amount: 2,
            }
    })
    return tl;
}


const main = gsap.timeline();

main.timeScale(1.5)
main.add('s')
main
.add(line('#Line1'), 's+=1')
.add(line('#Line2'), 's+=2')
.add(line('#Line3'), 's+=3')
.add(line('#Line4'), 's+=4')

