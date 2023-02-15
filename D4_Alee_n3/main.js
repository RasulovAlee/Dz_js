const yellow = document.getElementById('yellow')
const red = document.getElementById('red')
const green = document.getElementById('green')

let text = prompt('Choose color')
  if (text === 'red'){
        red.style.opacity = '1'
  }else if (text === 'yellow'){
        yellow.style.opacity = '1'
  }else if (text === 'green') {
      green.style.opacity = '1'
  }else {
      alert('Error')
}