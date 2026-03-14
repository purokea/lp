// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

// Add fade-in class to animated sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll(
    '.service-card, .target-list li, .transport-card, .life-support-content, .contact-inner'
  )
  sections.forEach((el, i) => {
    el.classList.add('fade-in')
    el.style.transitionDelay = `${i * 0.08}s`
    observer.observe(el)
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(a.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
})
