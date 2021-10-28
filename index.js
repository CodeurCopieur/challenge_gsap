gsap.to('.section__wrap-cd', {
  duration: 1,
  x:`-=${document.querySelector('.section__wrap-img').clientHeight}`,
  duration: 1.2,
  ease: 'Power4.out',
  scrollTrigger: {
    trigger: ".section__wrap-cd",
    //markers: true,
    scrub: 2,
    //    Trigger Scroller
    start: "top-100 50%",
    end: "top+=100 30%",
    toggleActions: "restart complete none none",
  }
})

//syntaxe simplifier

ScrollTrigger.create({
  trigger: '.s2',
    pin: true,
    markers: true,
    //    Trigger Scroller
    star: 'top 50',
    end: 'bottom+=100 50%'
})