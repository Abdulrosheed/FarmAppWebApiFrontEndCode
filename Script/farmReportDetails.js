var idValue = document.getElementById('col-m-1')
var farmIdValue = document.getElementById('col-m-2')
var farmProduceValue = document.getElementById('col-m-3')
var gradeValue = document.getElementById('col-m-4')
var quantityValue = document.getElementById('col-m-5')
var farmerEmailValue = document.getElementById('col-m-6')
var farmInspectorEmailValue = document.getElementById('col-m-7')
var countryValue = document.getElementById('col-m-8')
var stateValue = document.getElementById('col-m-9')
var localGovernmentValue = document.getElementById('col-m-10')

function GetElementById(id)
{
    var id = window.location.href.split('=')[1];
    
    fetch("https://localhost:5001/api/FarmReport/GetFarmReport/" + id)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
        console.log(value)
        idValue.innerText = value.data.id;
        farmIdValue.innerText = value.data.farmId;
        farmProduceValue.innerText = value.data.farmProduct;
        farmInspectorEmailValue.innerText = value.data.farmInspectorEmail;
        gradeValue.innerText = value.data.grade;
        quantityValue.innerText = value.data.quantity;
        farmerEmailValue.innerText = value.data.farmerEmail;
        stateValue.innerText = value.data.state;
        countryValue.innerText = value.data.country;
        localGovernmentValue.innerText = value.data.localGovernment; 
        
    
        
    
    })
    
}
GetElementById()
