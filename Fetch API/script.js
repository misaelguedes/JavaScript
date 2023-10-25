// Método GET
fetch('https://reqres.in/api/users')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))


// Método POST
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: 'Misael'
    })
})
.then((res) => res.json())
.then((data) => console.log(data))