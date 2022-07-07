const buttonTheme = document.getElementById('theme')
const darkBlue = document.getElementById('dark-blue')
const darkPink = document.getElementById('dark-pink')
const pink = document.getElementById('pink')
const themes = document.getElementById('menu')

//let checkbox = document.getElementById('dark-blue', 'dark-pink', 'pink')

function openThemes() {
  themes.classList.remove('menu')
}
function closeThemes() {
  themes.classList.add('menu')
}

buttonTheme.onclick = function () {
  openThemes()
}

darkBlue.onclick = () => {
  document.body.classList.add('dark-blue')
  document.body.classList.remove('dark-pink')
  document.body.classList.remove('pink')
  darkPink.checked = false
  pink.checked = false

  closeThemes()
}

darkPink.onclick = () => {
  document.body.classList.add('dark-pink')
  document.body.classList.remove('dark-blue')
  document.body.classList.remove('pink')
  darkBlue.checked = false
  pink.checked = false

  closeThemes()
}

pink.onclick = () => {
  document.body.classList.add('pink')
  document.body.classList.remove('dark-pink')
  document.body.classList.remove('dark-blue')
  darkBlue.checked = false
  darkPink.checked = false

  closeThemes()
}
