

async function reset_password(event) {
    event.preventDefault();


    const password = document.getElementById("password").value
    const cpassword = document.getElementById("cpassword").value
    const email = localStorage.getItem("email")
    if (!password === cpassword) {
        alert("Incorrect Password")
        return

    }
    const data = {email,password}

    let options = {
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify(data)
    }


    try {
        console.log(options)
        const response = await fetch("/api/pass_reset",options)
        const data = await response.json()

        if(response.status === 201){
            alert(data.message)
            localStorage.clear()
            window.location.href = "/login.html"
        }


    } catch (error) {
        console.log(error)
    }
}


