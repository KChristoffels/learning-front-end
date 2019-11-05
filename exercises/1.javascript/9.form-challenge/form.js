document.getElementById("submit").addEventListener("click", createUser);
//document.getElementById("email").addEventListener("focusout", validateEmail);
//document.getElementById("password").addEventListener("focusout", validatePassword);

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

    let errorMessage = "You have filled out some fields incorrectly:\n"; 
    
    var user = new SubmittedInfo();

    let nodeInputFields = document.querySelectorAll("input");
    let arrayInputFields = Array.from(nodeInputFields);

    function checkInput (item){

        return item.style.borderColor == '#FF0000';
    }

    function checkEmptyFields () {        
        
    
        for(let i = 0;i < 9; i++){
            if(arrayInputFields[i].value == ""){
                arrayInputFields[i].style.borderColor = '#FF0000';
                console.dir(arrayInputFields[i]);                     
            }else{
                arrayInputFields[i].style.borderColor = ''; 
            }
        }

        if (arrayInputFields.some(checkInput) == true) {
            errorMessage += "- You have yet to fill out some required fields.\n";            
        } 
    }

    checkEmptyFields();

    function validateEmail() {

        let testEmail = /^(.+)@gmail.com$/;
        let eMail = document.getElementById("email").value;        
        let eMailField = document.getElementById("email");
        
        if (testEmail.test(eMail) == false) {
            errorMessage += "- Only @gmail addresses are accepted.\n";            
            eMailField.style.borderColor = '#FF0000';
        } 
    }

    function validatePassword() {

        let testPw = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        let passW = document.getElementById("password").value;
        
        let passWField = document.getElementById("password");
        let confPw = document.getElementById("confpw").value;                       
    
        if (testPw.test(passW) == false) {
            errorMessage += "- Password must contain at least one number and one uppercase.\n";            
            passWField.style.borderColor = '#FF0000';           
        } 
        if (passW !== confPw) {
            errorMessage += "- Your password does not match the second password entry.\n";            
            passWField.style.borderColor = '#FF0000';
        }        
    }
    
    validatePassword()
    validateEmail()    


    if (arrayInputFields.some(checkInput) == true) {

        console.log(errorMessage);        

    } else {
       
    window.localStorage.setItem(user.firstName + " " + user.lastName, JSON.stringify(user));
    
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confpw").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("age").value = "";
    document.getElementById("hobbies").value = "";

    //location.reload();
     
    }    
}








    



