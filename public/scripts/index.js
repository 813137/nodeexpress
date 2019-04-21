
fetch('http://localhost:3000/class/list')
  .then(function (response) {
    if (response.ok) {
      return response.json()
    } else {
      throw ('Failed to load classlist: response code invalid')
    }
  })
  .then(function (data) {
    let classList = document.getElementById('classList')

    data.forEach(function (student) {
      let li = document.createElement('LI')
      let liText = document.createTextNode(student.student + ' ' + student.studentNumber)

      li.className += 'student'
      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
  .catch(function (e) {
    alert(e)
  })
