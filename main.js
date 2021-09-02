// navigation

// main sections

const mainHome = getEl('#main__home')
const mainBookmarks = getEl('#main__bookmarks')
const mainCreate = getEl('#main__create')
const mainProfile = getEl('#main__profile')

// footer navigation buttons

const buttonHome = getEl('#footer__home')
const buttonBookmarks = getEl('#footer__bookmarks')
const buttonCreate = getEl('#footer__create')
const buttonProfile = getEl('#footer__profile')

// get element function

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

// navigation events

// hide all main elements and remove active state on all buttons

function hideAll() {
  const mainElementArray = document.querySelectorAll('.main')
  mainElementArray.forEach((mainElelement, index) => {
    mainElelement.classList.add('main--hidden')
  })

  const footerButtonElementArray = document.querySelectorAll('.footer__button')
  footerButtonElementArray.forEach((footerButtonElement, index) => {
    footerButtonElement.classList.remove('active')
  })
}

// add eventlistener to each button which then executes hideAll() and removes/adds necessary classes to relevant element

function addButtonEventListener(name) {
  getEl(`#footer__${name}`).addEventListener('click', () => {
    hideAll()
    getEl(`#main__${name}`).classList.remove('main--hidden')
    getEl(`#footer__${name}`).classList.add('active')
  })
}

addButtonEventListener('home') // partial (name) of the id
addButtonEventListener('bookmarks')
addButtonEventListener('create')
addButtonEventListener('profile')

// answer & boomark buttons

// get all elements function

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

// get card bookmarks

const bookmarks = getElAll('.card__bookmark')

// get card answer buttons

const answerButtons = getElAll('.card__button')

// add eventlistener to answer buttons which changes the style of the relevant button and toogles the class of the next element sibling which is the p tag with the answer

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    answerButtons[i].classList.toggle('card__button--hide')
    if (answerButtons[i].innerText === 'Hide answer') {
      answerButtons[i].innerText = 'Show answer'
    } else {
      answerButtons[i].innerText = 'Hide answer'
    }
  })
}

// add eventlistener to bookmarks buttons which changes the style of the relevant bookmark button

for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener('click', () => {
    bookmarks[i].classList.toggle('card__bookmark--marked')
  })
}
