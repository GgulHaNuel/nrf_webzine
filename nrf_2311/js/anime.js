document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    const fadeUp = document.querySelectorAll('.fadeUp');
    const fadeDown = document.querySelectorAll('.fadeDown');
    const fadeRt = document.querySelectorAll('.fadeRt');
    const fadeLt = document.querySelectorAll('.fadeLt');
    const fadeUpDelay = document.querySelectorAll('.fadeUpDelay');
    const fadeUpDelay2 = document.querySelectorAll('.fadeUpDelay2');
    const fadeUpDelay3 = document.querySelectorAll('.fadeUpDelay3');
    const fadeDownDelay = document.querySelectorAll('.fadeDownDelay');
    const fadeRtDelay = document.querySelectorAll('.fadeRtDelay');
    const fadeRtDelay2 = document.querySelectorAll('.fadeRtDelay2');
    const fadeLtDelay = document.querySelectorAll('.fadeLtDelay');
    const scrollScrub = document.querySelectorAll('.scrollScrub');

    fadeUp.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeUpDelay.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeUpDelay2.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeUpDelay3.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeDown.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: -150,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeDownDelay.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: -150,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.4,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeRt.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -250,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeRtDelay.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -250,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.4,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeRtDelay2.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -250,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.4,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeLt.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: 250,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none reverse',
                scrub: false,
            },
        });
    });

    fadeLtDelay.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: 250,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.4,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none play reverse',
                scrub: false,
            },
        });
    });

    scrollScrub.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power3.out',
            duration: 1,
            delay: index * 0.03,
            scrollTrigger: {
                trigger: content,
                start: 'top 90%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play play none none',
                scrub: true,
            },
        });
    });
});
