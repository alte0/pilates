const toggleEl = document.querySelector(`.header__nav-toggler`)
const nav = document.querySelector(`.nav`)
const close = nav.querySelector(`.nav__close`)
const menu = nav.querySelector(`.main-menu`)

const toggler = el => {
  el.classList.toggle(`nav_open`)
}

const toggle = () => {
  toggler(nav)

  if (nav.classList.contains(`nav_open`)) {
    close.addEventListener(`click`, toggle)
    menu.addEventListener(`click`, toggle)
  }

  if (!nav.classList.contains(`nav_open`)) {
    close.removeEventListener(`click`, toggle)
    menu.removeEventListener(`click`, toggle)
  }
}

toggleEl.addEventListener(`click`, toggle)
