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

//email form content
function SendMail() {
  const form = document.getElementById('my-form')
  form.addEventListener('submit', SendMail)
  const name = document.getElementById('full-name')
  const email = document.getElementById('email-id')
  const message = document.getElementById('message')
  if (
    name.value === '' ||
    name.value == null ||
    email.value === '' ||
    email.value == null ||
    message.value === '' ||
    message.value == null
  ) {
    message.push('Missing fields are required')
  } else {
    var params = {
      from_name: document.getElementById('full-name').value,
      email_id: document.getElementById('email-id').value,
      message: document.getElementById('message').value,
    }
    emailjs
      .send('service_rg9bggb', 'template_3jj7rbh', params)
      .then(function (res) {
        alert('Thank you for your submission!' + res.status)
      })
  }
}

//pop-up image content

document.querySelectorAll('.portfolio-pictures img').forEach((image) => {
    image.onclick = () => {
      document.querySelector('.popup-image-section').style.display='block';
      document.querySelector('.popup-image-section img').src = image.getAttribute('src');
    }

    document.querySelector('.popup-image-section span').onclick = () => {
      document.querySelector('.popup-image-section').style.display = 'none';

    }
  })
