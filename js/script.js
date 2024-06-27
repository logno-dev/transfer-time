const form = document.getElementById('form')
const estimate = document.getElementById('estimate')
const time = document.getElementById('time')
const hist = document.getElementById("hist")

const history = []
if (!!localStorage.length) {
  history.push(...JSON.parse(localStorage.getItem("history")))
  updateHistory()
}


function updateHistory() {
  hist.innerHTML = ""
  for (let i = history.length - 1; i >= 0; i--) {
    hist.innerHTML += `<tr><td>${history[i].pounds}</td><td>${history[i].speed}</td><td>${history[i].duration}</td><td>${history[i].time}</td></tr>`
  }

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = new FormData(form)
  const pounds = input.get('pounds')
  const speed = input.get('speed')
  const calculation = pounds / 8.33 / speed / 60
  const estimateValue = `${Math.floor(calculation)} hours ${Math.round((calculation - Math.floor(calculation)) * 60)} minutes`
  const timeValue = new Date(new Date().getTime() + calculation * 60 * 60 * 1000).toLocaleTimeString()


  estimate.textContent = estimateValue
  time.textContent = timeValue

  history.push({"pounds": pounds, "speed": speed, "duration": estimateValue, "time": timeValue})

  if (history.length === 50) {
    history.shift()
  }
  
  localStorage.setItem("history", JSON.stringify(history))

  updateHistory()
})
