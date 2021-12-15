const getAllBdays = () => {
  return fetch('http://localhost:3001/api/v1/birthdays')
    .then(response => response.json())
}

const postNewBday = (newBday) => {
  return fetch('http://localhost:3001/api/v1/birthdays', {
    method: 'POST',
    body: JSON.stringify(newBday),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
}


module.exports = {
  getAllBdays,
  postNewBday
}