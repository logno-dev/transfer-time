const form = document.getElementById('form')
const estimate = document.getElementById('estimate')
const time = document.getElementById('time')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = new FormData(form)
  const pounds = input.get('pounds')
  const speed = input.get('speed')
  const calculation = pounds / 8.33 / speed / 60
  console.log(calculation)
  estimate.textContent = `${Math.floor(calculation)} hours ${Math.round((calculation - Math.floor(calculation)) * 60)} minutes`
  time.textContent = new Date(new Date().getTime() + calculation * 60 * 60 * 1000).toLocaleTimeString()
})
