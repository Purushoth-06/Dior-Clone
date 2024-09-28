gsap.registerPlugin(ScrollTrigger);

gsap.from("#mainimg1", {
  transform: "translateX(-150%)",
  duration: 0.5,
  ease: "linear",
});
gsap.from("#mainimg2", {
  transform: "translateX(150%)",
  duration: 0.5,
  ease: "linear",
});

gsap.to("#anim h1", {
  transform: "translateX(-70%)",
  duration: 5,
  ease: "linear",
  scrollTrigger: {
    trigger: "#anim",
    scroller: "body",
    start: "top 30%",
    end: "top top",
    /*markers: true,*/
    scrub: 5,
  },
});
