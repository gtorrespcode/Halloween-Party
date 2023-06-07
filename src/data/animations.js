export const animations = {
    downToUp: {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: 0.5, duration: 1 },
        viewport: {once: true}
      },
  
      growUp: {
        initial: { opacity: 0, scale: 0.5, y: 100 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.8 },
        viewport: {once: true}
      },

      leftToRight: {
        initial: { opacity: 0, x: -300 },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay: 0.5, duration: 1 },
        viewport: {once: true}
        
      },

      rightToLeft: {
        initial: { opacity: 0, x: 300 },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay: 0.5, duration: 1 },
        viewport: {once: true}
        
      },

      rotateToLeft: {
        initial: { opacity: 0, rotate: 180 },
        whileInView: { opacity: 1, rotate: 0 },
        transition: { delay: 0.1, duration: 0.2 },
        viewport: {once: true}
      },

      leftToRightCard: {
        initial: { opacity: 0, x: -150 },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay: 0.5, duration: 0.5 },
        viewport: {once: true}
        
      },

      rightToLeftCard: {
        initial: { opacity: 0, x: 150 },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay: 0.5, duration: 0.5 },
        viewport: {once: true}
        
      },
}