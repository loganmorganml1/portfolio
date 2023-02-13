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
images[0] = './assets/img/image1.jpeg'
images[1] = './assets/img/image2.jpeg'
images[2] = './assets/img/image3.jpeg'

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

