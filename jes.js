
(function () {
       fetch('https://randomuser.me/api/?results=10')
           .then(function (response) {
                   return response.json()
                   })
           .then(function (data) {
                   render(data.results)
                })

        function render(users) {
               users.forEach(function (user) {
                       document.body.appendChild(makeUserDiv(user))
                    })
            }

        function makeUserDiv(user) {

                   const imgUrl = user.picture.thumbnail
                   const email = user.email

                   const div = document.createElement('div')
                   const img = document.createElement('img')
                   const emailP = document.createElement('p')
                   const nameP = document.createElement('p')
               div.style.border = '1px solid black'
                img.setAttribute('src', imgUrl)

            emailP.innerText = email

                  div.appendChild(img)

                    div.appendChild(emailP)
                    return div
               }
    })()