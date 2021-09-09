const registerFormEl = document.getElementById("Register-Form")
const mainContentEl = document.getElementById("Main-Content")


registerFormEl.addEventListener("submit", event => {
    event.preventDefault()
    
    let ourFormData = new FormData(event.target)

    let firstName = ourFormData.get("firstName")
    let emailAddress = ourFormData.get("emailAdress")
    let updateHTMLContent = `
            <h2>Congratulations ${firstName}</h2>

            <p>You're on your way to becoming a DESIGN Master!</p>

            <p class="fine-print">You will get weekly DESIGN tips sent to: ${emailAddress}</p>
            <form id="Register-Form" class="register-form" action="" method="POST">
                <button class="btn btn-primary" type="submit">Back</button>
            </form>`
    
    mainContentEl.innerHTML = updateHTMLContent
})
