
const InputDate = document.querySelector('#description-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');
const registerInputEmail = document.querySelector('#gender-input');

var initial = window.location.href.split('=')[1]
console.log(initial);
var first = initial.split('&')[0]
console.log(first)
var second = initial.split('&')[1];
var last = second.split('%')[0];
let items = [];



const registerCategory = () => {
    
    let data = 
    {
        farmid : first,
        
        farminspectoremail : registerInputEmail.value,
        inspectingdate : InputDate.value

     

    }

    console.log(data);
    fetch('https://localhost:5001/api/Admin/AssignFarmInspectorToFarm',{
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
        
}
const validateInputs = (passwordInput,emailInput) => {
    return  passwordInput.value.trim() == "" || emailInput.value.trim() == "" 
}



InputSubmitBtn.addEventListener('click', function(e)  
{
    e.preventDefault()
    if (validateInputs(registerInputEmail, InputDate)) {
           alert("Pls fill all the fields in this form")
            
            return;
        }
    
     
    
        registerCategory();
        
})
function getFarmInspectorByState()
{
    fetch("https://localhost:5001/api/FarmInspector/GetFarmInspectorByState" + last)
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        console.log(value)
        AddEnumToTable(value.data);
       
    })
}

function loopItem()
{
    let selectTag = document.querySelector('#gender-input');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for(let item of Array.from(tablerow))
    {
        
        selectTag.removeChild(item)
    }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTag(items[i], items[i])
    }
}
function CreateOptionTag(value , item)
{
    let selectTag = document.querySelector('#gender-input');
    selectTag.appendChild(InsertIntoOptionTag(item , value , "input-tag-select"))
}

function AddEnumToTable(obj)
{
    items = [];
    for(let i of obj)
    {
       

       items.push(i.email); 
    }
    loopItem();
}
function InsertIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}
getFarmInspectorByState();
