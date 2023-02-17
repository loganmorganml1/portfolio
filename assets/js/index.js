//hamburger menu
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }),
)

//slideshow content
var i = 0 //start point
var images = []
var time = 2700

//image list
images[0] = './assets/img/who-travels-phone-design.jpeg'
images[1] = './assets/img/colorful_astronaut.png'
images[2] = './assets/img/flyers.png'

//change image
function changeImg() {
  document.slide.src = images[i]
  if (i < images.length - 1) {
    i++
  } else {
    i = 0
  }
  setTimeout('changeImg()', time)
}

window.onload = changeImg

