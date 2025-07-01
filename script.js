function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav",{
    opacity:0,
  })
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1, #hero3 h3",{
    y:120,
    stagger: 0.2,
  });
}
document.body.style.overflowY = "auto";
loadingAnimation();

function cursorAnimation(){
  document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr",{
      left:dets.x,
      top:dets.y,
      duration: 0.2,
    });
  });
};

// gsap.utils.toArray("#nav3 h3, .dot").forEach((el) => {
//   el.addEventListener("mousemove", (e) => {
//     const bounding = el.getBoundingClientRect();
//     const magnetStrength = 100; // Increase to expand the effect
//     const xMove = (e.clientX - (bounding.left + bounding.width / 2)) / magnetStrength;
//     const yMove = (e.clientY - (bounding.top + bounding.height / 2)) / magnetStrength;
//     gsap.to(el, {
//       x: xMove * 800, // Increase for more pull
//       y: yMove * 800,
//       duration: 1.4, // Longer duration for a smoother feel
//       ease: "power2.out",
//     });
//   });

//   el.addEventListener("mouseleave", () => {
//     gsap.to(el, {
//       x: 0,
//       y: 0,
//       duration: 1.4, // Smooth return
//       ease: "power3.out",
//     });
//   });
// });


cursorAnimation(); 
