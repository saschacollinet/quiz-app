const mainHome = document.querySelector('#main__home')
const mainBookmarks = document.querySelector('#main__bookmarks')
const mainCreate = document.querySelector('#main__create')
const mainProfile = document.querySelector('#main__profile')

const buttonHome = document.querySelector('#footer__home')
const buttonBookmarks = document.querySelector('#footer__bookmarks')
const buttonCreate = document.querySelector('#footer__create')
const buttonProfile = document.querySelector('#footer__profile')

buttonHome.addEventListener('click', () => {
  mainHome.classList.add('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.add('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.add('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.add('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})
