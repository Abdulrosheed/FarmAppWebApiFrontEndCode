const InputName = document.querySelector('#name-input');
const InputDescription = document.querySelector('#description-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');



const registerCategory = () => {
    let data = 
    {
        name : InputName.value,
        description : InputDescription.value,

    }
    var id = window.location.href.split('=')[1];
    console.log(data);
    fetch('https://localhost:5001/api/Role/UpdateRole/'+id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            
        
            spanErrorMessage.innerText = data.message;
            spanErrorMessage.classList.remove('hidden');
           window.location.href = '/Html/getAllRole.html'
            
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
            spanErrorMessage.innerText = "Please fill in this fields";
            spanErrorMessage.classList.remove('hidden');
            
            return;
        }
    
     
    
        registerCategory();
        
})
