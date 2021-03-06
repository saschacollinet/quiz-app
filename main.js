// get element function

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

// get all elements function

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

// get main sections

const mainHome = getEl('#main__home')
const mainBookmarks = getEl('#main__bookmarks')
const mainCreate = getEl('#main__create')
const mainProfile = getEl('#main__profile')

// get footer navigation buttons

const buttonHome = getEl('#footer__home')
const buttonBookmarks = getEl('#footer__bookmarks')
const buttonCreate = getEl('#footer__create')
const buttonProfile = getEl('#footer__profile')

// card data

const appData = [
  {
    question: 'What nut is used to make marzipan?',
    answer: 'Almonds',
    isBookmarked: false,
    showAnswer: false,
    tags: ['nature', 'food', 'cooking'],
  },
  {
    question: 'How many letters in the word hippopotamus?',
    answer: '12',
    isBookmarked: false,
    showAnswer: false,
    tags: ['nature', 'animals', 'count'],
  },
  {
    question: 'Who did Orlando Bloom play in Pirates Of The Caribbean?',
    answer: 'Will Turner',
    isBookmarked: true, // true for demonstration only
    showAnswer: false,
    tags: ['people', 'movies', 'names'],
  },
  {
    question:
      'What is the answer to the ultimate question of life, the universe, and everything?',
    answer: '42',
    isBookmarked: false,
    showAnswer: false,
    tags: ['fun', 'books', 'pop culture'],
  },
]

// filtered card data for bookmarks

const appDataBookmarked = appData.filter(
  bookmark => bookmark.isBookmarked == true
)

// put in cardData (from appData, etc.) and the relevant mainEl (from main sections)

function renderCard(cardData, mainEl) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  mainEl.appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('card__bookmark')
  if (cardData.isBookmarked) {
    cardBookmark.classList.add('card__bookmark--marked')
  }
  cardBookmark.setAttribute('aria-label', 'Bookmark')
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const cardButton = document.createElement('button')
  cardButton.classList.add('card__button')
  cardButton.textContent = 'Show answer'
  cardSection.appendChild(cardButton)

  const cardAnswer = document.createElement('p')
  cardAnswer.classList.add('card__answer')
  if (!cardData.showAnswer) {
    cardAnswer.classList.add('card__answer--hidden')
  }
  cardAnswer.textContent = cardData.answer
  cardSection.appendChild(cardAnswer)

  const cardTags = document.createElement('ul')
  cardTags.classList.add('tags')
  cardSection.appendChild(cardTags)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardTags.appendChild(cardTag)
  })
}

appData.forEach(element => {
  renderCard(element, mainHome)
})

appDataBookmarked.forEach(element => {
  renderCard(element, mainBookmarks)
})

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

// create answer function (not working as intended right now)

function addQuestion(question, answer, isBookmarked, showAnswer, tags) {
  appData.push(question, answer, isBookmarked, showAnswer, tags)
}

document.querySelector('.create__button').addEventListener('click', () => {
  addQuestion({
    question: 'How do you write 2 in binary?',
    answer: '10',
    isBookmarked: false,
    showAnswer: false,
    tags: ['fun', 'books', 'pop culture'],
  })
})
