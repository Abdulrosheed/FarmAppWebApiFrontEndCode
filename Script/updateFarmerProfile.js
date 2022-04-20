const registerInputFirstName = document.querySelector('#first-name-input');
const registerInputLastName = document.querySelector('#last-name-input');
// const registerEmail = document.querySelector('#email-input');
const registerUserName = document.querySelector('#user-name-input');
const registerInputPassWord = document.querySelector('#pass-word-input');
const registerInputCountry = document.querySelector('#country-input');
const registerInputState = document.querySelector('#state-input');
const registerInputLocalGovernment = document.querySelector('#local-government-input');
// const registerInputGender = document.querySelector('#gender-input');
const registerInputSubmitBtn = document.querySelector('#btn-submit');
const registerPhoneNumber = document.querySelector('#phone-number-input');
let spanErrorMessage = document.querySelector('#error-message');


let userDetails = {};
GetElementById()


const adminRegisterUserRequest = () => {

    console.log(registerInputPassWord)
    //  console.log(userDetails);
    let data = 
    {
        firstname : registerInputFirstName.value,
        lastname : registerInputLastName.value,
        phonenumber : registerPhoneNumber.value,
        username : registerUserName.value,
        password : registerInputPassWord.value,
        state : registerInputState.value,
        country : registerInputCountry.value,
        localgovernment : registerInputLocalGovernment.value
    }
    console.log(data);
    let token = localStorage.getItem("farmer")
    fetch('https://localhost:5001/api/Farmer/UpdateFarmer', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Authorization" : 'Bearer ' + token,
            'Content-Type': 'application/json',

        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert(data.message)
          
            
    
               
            
        })
        .catch(error => console.error(error));
}


const validateInputs = (userNameInput, passwordInput,lastNameInput,
    firstNameInput,countryInput,stateInput,localGovernmentInput,phonenumber) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == "" ||   lastNameInput.value.trim() == ""
    ||  firstNameInput.value.trim() == "" ||  countryInput.value.trim() == "" ||  stateInput.value.trim() == "" ||  localGovernmentInput.value.trim() == "" ||   phonenumber.value.trim() == "";
}


registerInputSubmitBtn.addEventListener('click', function(e)  {
    e.preventDefault();
    if (validateInputs(registerUserName, registerInputPassWord, registerInputLastName,registerInputFirstName,registerInputCountry,registerInputState,
        registerInputLocalGovernment,registerPhoneNumber)) {
        alert("Pls fill all the fields in this form")
        return;
    }

   

    adminRegisterUserRequest();
})


function GetElementById()
{

   let token = localStorage.getItem("farmer")
   console.log(token) 
    fetch("https://localhost:5001/api/Farmer/GetFarmer/",
    {
        headers : {
            "Authorization" : 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
        console.log(value)
        registerInputFirstName.value = value.data.firstName;
        registerInputLastName.value = value.data.lastName;
        registerUserName.value = value.data.userName;
        registerPhoneNumber.value = value.data.phoneNumber;
        registerInputCountry.value = value.data.country;
        registerInputState.value = value.data.state;
        registerInputLocalGovernment.value = value.data.localGovernment;
        
        
        
    
        
    
    })
    
}