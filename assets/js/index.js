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

  var params = {
    from_name: document.getElementById('full-name').value,
    email_id: document.getElementById('email-id').value,
    message: document.getElementById('message').value
  }
  emailjs
    .send('service_rg9bggb', 'template_3jj7rbh', params)
    .then(function (res) {
      alert('Thank you for your submission!' + res.status)
    })
  }
//form validation
//const name = document.getElementById("full-name")
//const email = document.getElementById('email-id')
//const errorElement = document.getElementById('error')
//form.addEventListener('submit', (e) => {
  //let message = []
  //if (from_name.value ==="" || from_name.value == null) {
    //messages.push('Name is required')
  //}

  //if (messages.length > 0) {
  //e.preventDefault()
  //errorElement.innerText = messages.join(", ")
  //}
//})
