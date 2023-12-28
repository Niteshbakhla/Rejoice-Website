gsap.registerPlugin(ScrollTrigger);

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}


locoScroll();

function mousemover() {
  let circle = document.querySelector("#mousemover");
  let page = document.querySelector(".page1Content");


  page.addEventListener("mousemove", (dets) => {
    console.log(dets.x, dets.y)
    gsap.to(circle, {
      x: dets.x,
      y: dets.y,
      ease: Power2
    })
  })

  page.addEventListener("mouseenter", () => {
    gsap.to(circle, {
      scale: 1,
      opacity: 1
    });
  });

  page.addEventListener("mouseleave", () => {
    gsap.to(circle, {
      scale: 0,
      opacity: 0
    });
  });
}

mousemover();

function tl1() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: '.main',
      start: 'top 80%',
      end: 'top 80%',
      scrub: isMobile() ? false : 5,
    }
  })

  tl.to('.page2Top h3 span', {
    y: 0,
    stagger: 0.3,
    duration: 1,
  });

  tl.to('.page2Top .line', {
    width: '100%',
    duration: 3,
    ease: Power2
  })


  tl.to('.page2 p span', {
    y: 0,
    stagger: 0.2,
    ease: Power2,
    duration: 1
  })
}

function isMobile() {
  return window.innerWidth <= 500; // Adjust the threshold based on your design breakpoints
}

gsap.to('.page3-top h2 span', {
  y: 0,
  stagger: 0.2,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".page3-top",
    scroller: '.main',
    start: '50% 90%',
    end: '50% 90%',
    markers: true,
    scrub: 2
  }
})

function tl2() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.page4',
      start: '10% 70%',
      end: '10% 70%',
      // markers: true,
      scroller: '.main',
      scrub: 3,

    }
  });

  tl2.to('.page4Content span', {
    y: 0,
    stagger: 0.3,
    duration: 1,
    ease: Power4
  });

  tl2.to('.page4Content .barLine', {
    width: '100%',
    duration: 1,
    ease: Power4
  });

  tl2.to('.para p span', {
    y: 0,
    stagger: 0.2,
    ease: Power2
  });
}

function tl3() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.page6',
      scroller: '.main',
      start: '10% 90%',
      end: '10% 90%',
      // markers: true,
      scrub: 2
    }
  });


  tl3.to(".pageTop h3 span", {
    y: 0,
    stagger: 2,
    duration: 2
  });

  tl3.to('.pageTop .dlrLine', {
    width: '100%',
    ease: Power2
  })


  tl3.to('.paras p span', {
    y: 0,
    stagger: 0.1,
    ease: Power4
  })
}

tl1();
tl2();
tl3();



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});



let newtl = gsap.timeline();

newtl.from('.loader h3', {
  x: 300,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

newtl.to(".loader", {
  opacity: 0,
  display: "none"
});


newtl.to('.page1Content h1 span', {
  y: 0,
  stagger: 0.06,
  ease: Power2
});


gsap.to(".page8 .page8Bottom h1 span", {
  y: 0,
  stagger: 0.1,
  
 
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    start: "40% 70%",
    end: "50% 50%",
    // markers: true,
    scrub:5,
  }
})


