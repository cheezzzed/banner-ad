console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

// PRODUCT 300 banner
gsap.fromTo('.ad-tlou.ad-300-250 .goty', {
    top: "100%"
}, 
{
    top: "30%",
    duration: 2,
}
)

gsap.to('.ad-tlou.ad-300-250 .goty', {
    top: "55%",
    left: "-15%",
    delay: 2.5,
    duration: 2
})

gsap.fromTo('.ad-tlou.ad-300-250 .firefly', {
    top: "100%"
}, 
{
    top: "30%",
    delay: 2.5,
    duration: 2,
}
)

gsap.to('.ad-tlou.ad-300-250 .firefly', {
    top: "38%",
    delay: 2.5,
    duration: 2
})

// GOTY TEXT
gsap.fromTo('.ad-tlou.ad-300-250 h1', {
    opacity: 0,
    left: "-100%"
}, 
{
    opacity: 1,
    duration: 2,
    top: "9%",
    left: "0"
}
)

gsap.to('.ad-tlou.ad-300-250 h1', {
    delay: 2.5,
    duration: 2,
    top: "9%",
    color: "yellow"
})

// WINNER
gsap.fromTo('.ad-tlou.ad-300-250 h2', {
    opacity: 0,
    left: "100%",
    top: "28%"
}, 
{
    opacity: 1,
    delay: 2.5,
    duration: 2,
    left: "0",
    top: "28%",
}
)

// PRODUCT 720 banner
gsap.fromTo('.ad-tlou-two.ad-720-90 .goty', {
    top: "-100%"
}, 
{
    top: "10%",
    duration: 2,
}
)

gsap.to('.ad-tlou-two.ad-720-90 .goty', {
    left: "35%",
    delay: 2.5,
    duration: 2
})

gsap.fromTo('.ad-tlou-two.ad-720-90 .firefly', {
    top: "-120%"
}, 
{
    top: "50%",
    delay: 2.5,
    duration: 2,
}
)

gsap.to('.ad-tlou-two.ad-720-90 .firefly', {
    top: "-10%",
    delay: 2.5,
    duration: 2
})

// GOTY TEXT
gsap.fromTo('.ad-tlou-two.ad-720-90 h1', {
    opacity: 0,
    top: "6%",
    left: "-100%"
}, 
{
    opacity: 1,
    duration: 2,
    left: "-30%"
}
)

gsap.to('.ad-tlou-two.ad-720-90 h1', {
    delay: 2.5,
    duration: 2,
    top: "9%",
    color: "yellow"
})

// WINNER
gsap.fromTo('.ad-tlou-two.ad-720-90 h2', {
    opacity: 0,
    left: "100%",
    top: "65%",
}, 
{
    opacity: 1,
    delay: 2.5,
    duration: 2,
    top: "65%",
    left: "30%",
}
)

// PRODUCT 160 banner
gsap.fromTo('.ad-tlou-three.ad-160-600 .goty', {
    top: "100%"
}, 
{
    top: "30%",
    duration: 2,
}
)

gsap.to('.ad-tlou-three.ad-160-600 .goty', {
    top: "61%",
    delay: 2.5,
    duration: 1
})

gsap.fromTo('.ad-tlou-three.ad-160-600 .firefly', {
    left: "100%"
}, 
{
    left: "30%",
    delay: 2.5,
    duration: 2,
}
)

gsap.to('.ad-tlou-three.ad-160-600 .firefly', {
    left: "30%",
    delay: 2.5,
    duration: 2
})

// GOTY TEXT
gsap.fromTo('.ad-tlou-three.ad-160-600 h1', {
    opacity: 0,
    top: "6%"
}, 
{
    opacity: 1,
    duration: 2,
    top: "12%",
}
)

gsap.to('.ad-tlou-three.ad-160-600 h1', {
    delay: 2.5,
    duration: 2,
    top: "9%",
    color: "yellow"
})

// WINNER
gsap.fromTo('.ad-tlou-three.ad-160-600 h2', {
    opacity: 0,
    top: "23%"
}, 
{
    opacity: 1,
    delay: 2.5,
    duration: 2,
    top: "28%",
}
)