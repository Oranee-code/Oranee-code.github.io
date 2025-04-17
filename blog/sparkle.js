const sparkleContainer = document.createElement('div')
sparkleContainer.classList.add('sparkle-container')
document.body.appendChild(sparkleContainer)

function createSparkle() {
  const sparkle = document.createElement('div')
  sparkle.classList.add('sparkle')
  sparkle.style.left = Math.random() * window.innerWidth + 'px'
  sparkle.style.top = Math.random() * window.innerHeight + 'px'
  sparkleContainer.appendChild(sparkle)

  setTimeout(() => {
    sparkle.remove()
  }, 1500)
}

setInterval(createSparkle, 20)
