import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className={`navigation-container1 ${props.rootClassName} `}>
      <nav id="navigation" className="navigation">
        <div className="navigation__container">
          <a href="/">
            <div
              aria-label="Motherhood Muse - Home"
              className="navigation__logo"
            >
              <span className="navigation__logo-text">Motherhood</span>
            </div>
          </a>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navigationMenu"
            aria-expanded="false"
            className="navigation__toggle"
          >
            <span className="navigation-navigationtoggle-icon1 navigation__toggle-icon--menu">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigationtoggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <div id="navigationMenu" className="navigation__menu">
            <div className="navigation__cta">
              <a href="#contact">
                <div className="navigation-btn btn-primary btn">
                  <span>Terms and Conditions</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__logo, .navigation__toggle, .navigation__toggle-icon, .navigation__menu, .navigation__link, .navigation__link::before, .navigation__logo-text::after {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigation = document.getElementById("navigation")
  const body = document.body

  if (navigationToggle && navigationMenu) {
    navigationToggle.addEventListener("click", () => {
      const isExpanded =
        navigationToggle.getAttribute("aria-expanded") === "true"

      navigationToggle.setAttribute("aria-expanded", !isExpanded)
      navigationMenu.classList.toggle("navigation__menu--open")

      if (!isExpanded) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    })

    const navigationLinks = navigationMenu.querySelectorAll(".navigation__link")
    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMenu.classList.remove("navigation__menu--open")
        body.style.overflow = ""
      })
    })

    navigationMenu.addEventListener("click", (e) => {
      if (e.target === navigationMenu) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMenu.classList.remove("navigation__menu--open")
        body.style.overflow = ""
      }
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMenu.classList.remove("navigation__menu--open")
        body.style.overflow = ""
      }
    })
  }

  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      navigation.classList.add("navigation--scrolled")
    } else {
      navigation.classList.remove("navigation--scrolled")
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navigation
