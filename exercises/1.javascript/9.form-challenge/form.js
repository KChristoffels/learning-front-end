document.getElementById("submit").addEventListener("click", createUser);
document.getElementById("email").addEventListener("focusout", validateEmail);
document.getElementById("password").addEventListener("focusout", validatePassword);

let errorMessage = "You have filled out some fields incorrectly:\n";

let nodeInputFields = document.querySelectorAll("input");
let arrayInputFields = Array.from(nodeInputFields);
let requiredFields = arrayInputFields.slice(0,9);


function SubmittedInfo () {    

    this.firstName = document.getElementById("fname").value
    this.lastName = document.getElementById("lname").value;
    this.email = document.getElementById("email").value;
    this.pw = document.getElementById("password").value;
    this.address = document.getElementById("address").value;
    this.city = document.getElementById("city").value;
    this.zip = document.getElementById("zip").value;
    this.phone = document.getElementById("phone").value;
    this.age = document.getElementById("age").value;
    this.hobbies = document.getElementById("hobbies").value;    

}

function createUser (event) {

    var user = new SubmittedInfo();
    
    window.localStorage.setItem(user.firstName + " " + user.lastName, JSON.stringify(user));
    
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("age").value = "";
    document.getElementById("hobbies").value = "";  

    location.reload();
    
}

function validateEmail(event) {
    let testEmail = /^(.+)@gmail.com$/;
}

function validatePassword(event) {
    let testPw = /^(?=.*\d)(?=.*[A-Z])$/;
}

function checkEmptyFields () {
    
    requiredFields.forEach(field => {

        if(field.value == ""){
            field.style.borderColor = '#FF0000'; 
        }
    })

    if (requiredFields.some(borderColor = '#FF000')) {
        errorMessage += "You have yet to fill out some required fields\n";
    }
    

}



