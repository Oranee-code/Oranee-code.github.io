function changeText() {
  document.getElementById('title').textContent = 'I said do not click!!'

  const button = document.querySelector('button')

  button.textContent = 'I knew it!!"'

  button.style.backgroundColor = 'yellow'
  button.style.color = 'black'
}
