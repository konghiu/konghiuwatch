export const windowScrollFunc = () => {
     console.log('scroll')
     const ButtonBackToTop = document.querySelector('.button-back-to-top')
     const pageY = window.pageYOffset;
     const windowHeight = document.documentElement.clientHeight;
     if(pageY > windowHeight) {
          if(ButtonBackToTop !== null) {
               ButtonBackToTop.style.display = 'flex'
          }
     } else {
          if(ButtonBackToTop !== null) {
               ButtonBackToTop.style.display = 'none'
          }
     }
}
