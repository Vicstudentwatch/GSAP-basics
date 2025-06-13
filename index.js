//Make DOM completely loaded before running the script
document.addEventListener("DOMContentLoaded", (e) => {
    let tweenTo = gsap.to(".box",{
        x:500,
        duration: 15,
        ease: "elastic",
        rotation: 360,
        borderTop: 8 + "px solid red",
    })
    document.querySelector("#Pause").onclick = () => tweenTo.pause();
    document.querySelector("#Resume").onclick = () => tweenTo.resume();
})


