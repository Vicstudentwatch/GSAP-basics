// //Make DOM completely loaded before running the script
// document.addEventListener("DOMContentLoaded", (e) => {
//     let tweenTo = gsap.to(".box",{
//         x:500,
//         duration: 15,
//         ease: "elastic",
//         rotation: 360,
//         borderTop: 8 + "px solid red",
//     })
//     document.querySelector("#Pause").onclick = () => tweenTo.pause();
//     document.querySelector("#Resume").onclick = () => tweenTo.resume();
//     document.querySelector("#Reverse").onclick = () => tweenTo.reverse();
//     document.querySelector("#Restart").onclick = () => tweenTo.restart();
// })

//Timelines
document.addEventListener("DOMContentLoaded", (e) => {
    let tl = gsap.timeline();

    tl.to(".box1", { x: 500,duration:5, rotation: 360, borderTop: "8px solid red" ,opacity:0})
    tl.fromTo(".box2", { x: 0, backgroundColor: "red", opacity: 1 }, { x: 200, backgroundColor: "blue", opacity: 0, duration: 3 }, "-=3")
    tl.to(".box3", { scale: 1.5 }, "+=0.5");

    document.querySelector("#Pause").onclick = () => tl.pause();
    document.querySelector("#Resume").onclick = () => tl.resume();
    document.querySelector("#Reverse").onclick = () => tl.reverse();
    document.querySelector("#Restart").onclick = () => tl.restart();
});


