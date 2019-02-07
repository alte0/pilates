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
    const fpNav = document.querySelector(`#fp-nav`)
    let numberEl = document.querySelector(`.number-screen`)
    let index = destination.index + 1

    if (!numberEl) {
      createSpan()
      numberEl = document.querySelector(`.number-screen`)
    }

    if (index === 4 || index === 6) {
      fpNav.style.opacity = `0`
      fpNav.style.right = `-100%`
    } else {
      fpNav.removeAttribute(`style`)
    }

    if (index !== null) {
      if (index < 10) {
        index = `0${index}`
      }

      numberEl.textContent = index
    }
  }
})
