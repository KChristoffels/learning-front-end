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

    console.dir (arrayInputFields);

    function checkInput (item){

        return item.style.borderColor == '#FF0000';
    }

    function checkEmptyFields() {
    
        for(let i = 0;i < 9; i++){
                if(arrayInputFields[i].value == ""){
                    arrayInputFields[i].style.borderColor = '#FF0000';
                    console.dir(arrayInputFields[i]);
                    console.log(arrayInputFields[i].style.borderColor);                     
                }else{
                    arrayInputFields[i].style.borderColor = ''; 
                }
        }

        if (arrayInputFields.some(checkInput) == true) {
            errorMessage += "- You have yet to fill out some required fields.\n";
            console.log(errorMessage);
        }  
    } 

    


    checkEmptyFields();
}