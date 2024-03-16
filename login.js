const form = document.querySelector("form")

form.addEventListener("submit"(e)=)>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        alert("correct")
        }else{
            alert("wrong")
        }
    })
    //function for checking username and password

    function authentication(username,password){
        if(username === "6954" && password === "west"){
    }else{
        return false
            }
        }
    }
}