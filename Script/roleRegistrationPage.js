const InputName = document.querySelector('#name-input');
const InputDescription = document.querySelector('#description-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');



const registerRole = () => {
    let data = 
    {
        name : InputName.value,
        description : InputDescription.value,

    }
    console.log(data);
    fetch('https://localhost:5001/api/Role/RegisterRole', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
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
const validateInputs = (passwordInput,emailInput) => {
    return  passwordInput.value.trim() == "" || emailInput.value.trim() == "" 
}



InputSubmitBtn.addEventListener('click', function(e)  
{
        e.preventDefault()
    if (validateInputs(InputName, InputDescription)) {
            alert("Pls fill all the fields in this form")
            return;
        }
    
     
    
        registerRole();
        
})
