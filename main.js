// navigation

// main sections

const mainHome = document.querySelector('#main__home')
const mainBookmarks = document.querySelector('#main__bookmarks')
const mainCreate = document.querySelector('#main__create')
const mainProfile = document.querySelector('#main__profile')

// footer navigation buttons

const buttonHome = document.querySelector('#footer__home')
const buttonBookmarks = document.querySelector('#footer__bookmarks')
const buttonCreate = document.querySelector('#footer__create')
const buttonProfile = document.querySelector('#footer__profile')

// navigation events

buttonHome.addEventListener('click', () => {
  mainHome.classList.remove('main--hidden')
  mainBookmarks.classList.add('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.add('main--hidden')

  buttonHome.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  mainHome.classList.add('main--hidden')
  mainBookmarks.classList.remove('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.add('main--hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.add('main--hidden')
  mainBookmarks.classList.add('main--hidden')
  mainCreate.classList.remove('main--hidden')
  mainProfile.classList.add('main--hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.add('main--hidden')
  mainBookmarks.classList.add('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.remove('main--hidden')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})

// main home

// show answer button one

const buttonAnswerOne = document.querySelector('#card__buttonone')
const AnswerOne = document.querySelector('#card__answerone')

buttonAnswerOne.addEventListener('click', () => {
  AnswerOne.classList.toggle('card__answer--show')
})

// show answer button two

const buttonAnswerTwo = document.querySelector('#card__buttontwo')
const AnswerTwo = document.querySelector('#card__answertwo')

buttonAnswerTwo.addEventListener('click', () => {
  AnswerTwo.classList.toggle('card__answer--show')
})

// show answer button three

const buttonAnswerThree = document.querySelector('#card__buttonthree')
const AnswerThree = document.querySelector('#card__answerthree')

buttonAnswerThree.addEventListener('click', () => {
  AnswerThree.classList.toggle('card__answer--show')
})
