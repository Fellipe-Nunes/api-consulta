document.getElementById('baixarButton').addEventListener('click', function(e) {

  fetch('/baixar', {method: 'POST'})
    .then(res => res.text())
    .then(data => document.write(data))
})

document.getElementById('salvarButton').addEventListener('click', function(e) {

fetch('/salvar', {method: 'POST'})
  .then(res => res.text())
  .then(data => document.write(data))
})