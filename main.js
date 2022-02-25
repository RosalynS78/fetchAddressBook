
let arrayOfUsers = [];
let multiUsers = [];


window.onload = function () {
  getUsers()
}

const getUsers = () => {
  fetch('https://randomuser.me/api?results')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(users => arrayOfUsers = users.results)
    .catch(err => console.log('Error, ${err}'))
}
const getManyUsers = () => {
  fetch('https://randomuser.me/api?results=5')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(manyUsers => multiUsers = manyUsers.results)
    .catch(err => console.log('Error, ${err}'))
}

const consoleContacts = () => {
  console.log(arrayOfUsers)
  console.log(multiUsers)

}

const displayUser = () => {
  fetch('https://randomuser.me/api/?results')
    .then(res => res.json())
    .then(users => (arrayOfUsers = users.results))
  const singleUser = document.getElementById('this-users')
  arrayOfUsers.map((users) => {
    const img = document.createElement("img")
    img.src = users.picture.medium
    const li = document.createElement('li')
    const text = document.createTextNode(`  Name: ${users.name.first}  ${users.name.last},  Gender: ${users.gender}, Age: ${users.dob.age}, Country: ${users.location.country}, State: ${users.location.state}, City: ${users.location.city} `)
    li.appendChild(img)
    li.appendChild(text)
    singleUser.append(li)

    const button = document.createElement("button");
    button.innerHTML = "contact";
    button.onclick = function () {
      const contactDetails = document.createTextNode(
        ` Cell: ${users.cell}, Phone: ${users.phone}, Email: ${users.email}`
      );

      li.appendChild(contactDetails);
    };
    li.appendChild(button);

  })
}

const fetch5Users = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(manyUsers => (multiUsers = manyUsers.results))
  const displayFive = document.getElementById('five-users')
  multiUsers.map((manyUsers) => {
    const img = document.createElement("img")
    img.src = manyUsers.picture.medium
    const li = document.createElement('li')
    const text = document.createTextNode(`  Name: ${manyUsers.name.first}  ${manyUsers.name.last},  Gender: ${manyUsers.gender}, Age: ${manyUsers.dob.age}, Country: ${manyUsers.location.country}, State: ${manyUsers.location.state}, City: ${manyUsers.location.city}`)
    li.appendChild(img)
    li.appendChild(text)
    displayFive.append(li)
    const button = document.createElement("button");
    button.innerHTML = "contact";
    button.onclick = function () {
      const contactDetails = document.createTextNode(
        ` Cell: ${manyUsers.cell}, Phone: ${manyUsers.phone}, Email: ${manyUsers.email}`
      );

      li.appendChild(contactDetails);
    };
    li.appendChild(button);


  })

}

const reset = () => {
  location.reload();

}



