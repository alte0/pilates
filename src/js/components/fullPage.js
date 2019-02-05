import Fullpage from 'fullpage.js'

const createSpan = () => {
  const span = document.createElement(`span`)
  span.classList.add(`number-screen`)

  const fpNav = document.querySelector(`#fp-nav`)
  fpNav.insertBefore(span, fpNav.children[0])
}

Fullpage('#full-page', {
  licenseKey: 'YOUR_KEY_HERE',
  anchors: ['screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6'],
  navigation: true,
  verticalCentered: false,
  keyboardScrolling: false,
  scrollBar: true,
  afterLoad: function (origin, destination) {
    let numberEl = document.querySelector(`.number-screen`)

    if (!numberEl) {
      createSpan()
      numberEl = document.querySelector(`.number-screen`)
    }

    if (destination.index !== null) {
      let index = destination.index + 1

      if (index < 10) {
        index = `0${index}`
      }

      numberEl.textContent = index
    }
  }
})
