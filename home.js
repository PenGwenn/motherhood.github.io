import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Shiny Cluttered Ibis</title>
        <meta property="og:title" content="Shiny Cluttered Ibis" />
      </Helmet>
      <Navigation rootClassName="navigationroot-class-name"></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-title-wrap, .hero-panel, .card, .testimonial-card, .nominate-card, .spotlight-feature {
  animation: none;
  opacity: 1;
  transform: none;
}
}
:focus-visible {
  outline: 3px solid var(--color-outline);
  outline-offset: 2px;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" role="banner" className="hero">
        <div className="hero-header">
          <div className="hero-title-wrap">
            <h1 className="home-hero-title">Welcome to Motherhood</h1>
            <nav aria-label="Micro navigation" className="hero-nav">
              <ul className="hero-nav-list">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
        <h2 className="home-section-title section-title">Good luck...</h2>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes hero-in {to {opacity: 1;
transform: translateY(0);}}@keyframes panel-in {to {opacity: 1;
transform: translateY(0);}}@keyframes card-reveal {to {opacity: 1;
transform: translateY(0);}}@keyframes spotlight-in {to {opacity: 1;
transform: translateY(0);}}@keyframes testimonial-in {to {opacity: 1;
transform: translateY(0);}}@keyframes nominate-in {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Intersection Observer for card animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards and animated elements
  const animatedElements = document.querySelectorAll(
    ".card, .testimonial-card, .resource-featured, .spotlight-feature"
  )
  animatedElements.forEach((element) => {
    animateOnScroll.observe(element)
  })

  // Smooth focus management for keyboard navigation
  const focusableElements = document.querySelectorAll(
    "a, button, .hero-chip, .quicklink-item"
  )
  focusableElements.forEach((element) => {
    element.addEventListener("focus", () => {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" })
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
