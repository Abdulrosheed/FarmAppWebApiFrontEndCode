const InputName = document.querySelector('#name-input-reg-category');
const InputDescription = document.querySelector('#description-input-reg-category');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');



const registerCategory = () => {
    let data = 
    {
        name : InputName.value,
        password : InputDescription.value,

    }

    console.log(data);
    fetch('https://localhost:5001/api/Category/RegisterCategory', {
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
            alert("Pls fill in all the fields in this form")
            return;
        }
    
     
    
        registerCategory();
        
})
