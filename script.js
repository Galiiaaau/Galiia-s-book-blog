const timeline = gsap.timeline({ defaults: {duration: 0.7}})
timeline
      .from('header', { opacity: 0})
      .from('.sidebar', { x: 500 })
      .from('.site-title h1', { x: -700 }, '<0')
      .from('.subtitle', { y: 100})
      .from('li', { opacity: 0, stagger: .5 })
