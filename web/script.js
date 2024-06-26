function create() {
  console.log("Button pressedd")
  let input = document.querySelector('#input')
  const data = {
    value: input.value
  }
  fetch('https://dynamic-list.onrender.com', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(data => console.log(data))
}
