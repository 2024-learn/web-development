function handleEditProfile() {
    // assign text content to input value
    var name = document.getElementById("name").textContent
    var inputName = document.getElementById("input-name")
    inputName.value = name

    // document.getElementById("input-name").value = document.getElementById("name").textContent

    var email = document.getElementById("email").textContent
    var inputEmail = document.getElementById("input-email")
    inputEmail.value = email

    var interests = document.getElementById("interests").textContent
    var inputInterests = document.getElementById("input-interests")
    inputInterests.value = interests

    // var datepicker = new Datepicker('#birthday');

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}


function handleUpdateProfile() {
    // get the value of input field object and set it as the text of the updated element
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName

    
    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    if (validator.isEmail(updatedEmail)) {
        email.textContent = updatedEmail
    } else {
        alert("Please use a valid email address")
    }
    
    var updatedInterests = document.getElementById("input-interests").value
    var interests = document.getElementById("interests")
    interests.textContent = updatedInterests

    document.getElementById("display-view").style.display = "block"
    document.getElementById("edit-view").style.display = "none"
}