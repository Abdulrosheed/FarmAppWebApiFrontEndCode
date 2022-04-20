var nameValue = document.getElementById('col-m-1')
var idValue = document.getElementById('col-m-01')
var userIdValue = document.getElementById('col-m-001')

var emailValue = document.getElementById('col-m-3')
var phoneNumberValue = document.getElementById('col-m-4')
var countryValue = document.getElementById('col-m-5')
var stateValue = document.getElementById('col-m-6')
var localGovernmentValue = document.getElementById('col-m-7')

function GetElementById(id)
{
    var id = window.location.href.split('=')[1];
    
    fetch("https://localhost:5001/api/Company/GetCompanyFromRoute/" + id)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
    
        nameValue.innerText = value.data.name;
        emailValue.innerText = value.data.email;
        phoneNumberValue.innerText = value.data.phoneNumber;
        countryValue.innerText = value.data.country;
        stateValue.innerText = value.data.state;
        localGovernmentValue.innerText = value.data.localGovernment;
        idValue.innerText = value.data.id;
        userIdValue.innerText = value.data.userId;
        
    
        
    
    })
    
}
GetElementById()
