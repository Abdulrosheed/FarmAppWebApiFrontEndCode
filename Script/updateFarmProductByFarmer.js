const InputName = document.querySelector('#price-input');
// const InputDescription = document.querySelector('#description-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');



const registerCategory = () => {
    let data = 
    {
        price : InputName.value,
        
    }
    var id = window.location.href.split('=')[1];
    console.log(data);
    fetch('https://localhost:5001/api/FarmProduct/UpdateFarmProductForFarmer/'+id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            
            alert(data.message)
            
        })
        .catch(error => console.error(error));
}
const validateInputs = (passwordInput) => {
    return  passwordInput.value.trim() == ""
}



InputSubmitBtn.addEventListener('click', function(e)  
{
    e.preventDefault()
    if (validateInputs(InputName)) {
            alert("Pls fill all the fields in this form")
            
            return;
        }
    
     
    
        registerCategory();
        
})
