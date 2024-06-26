function create() {
  console.log("Button pressed")
  let input = document.querySelector('#input')
  const data = {
    value: input.value
  }
  fetch('http://localhost:1234', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}
