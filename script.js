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
    delay: 0,
    // 4
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

Shery.makeMagnet("#nav h3, #nav1 .dot", {
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // duration: 1,
  ease: "expo.out",
  duration:1.5,
});

cursorAnimation(); 
