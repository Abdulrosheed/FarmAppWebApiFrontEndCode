const InputSubject = document.querySelector('#subject-email-input');
const InputContent = document.querySelector('#content-email-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');
const registerInputEmailType = document.querySelector('#emailtype');

var items = 
[

]

const registerEmail = () => {
    let data = 
    {
        subject : InputSubject.value,
        content : InputContent.value,
        emailtype : parseInt(registerInputEmailType.value),

    }
    console.log(data);
    fetch('https://localhost:5001/api/Email/CreateEmail', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        },
        
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            alert(data.message)
            
        })
        .catch(error => console.error(error));
}
const validateInputs = (passwordInput,emailInput,emailTypeInput) => {
    return  passwordInput.value.trim() == "" || emailInput.value.trim() == ""  || emailTypeInput.value.trim() == "" 
}



InputSubmitBtn.addEventListener('click', function(e)  
{
        e.preventDefault()
    if (validateInputs(InputSubject, InputContent, registerInputEmailType)) {
            alert("Pls fill all the fields in this form")
            return;
        }
    
     
    
        registerEmail();
        
})


function getEnumEmailType()
{
    fetch("https://localhost:5001/api/Enum/GetEmailTypeEnum")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddCategoryToTable(value);
        console.log(value)
    })
}


function loopItem()
{
    let selectTag = document.querySelector('#emailtype');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for(let item of Array.from(tablerow))
    {
        
        selectTag.removeChild(item)
    }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTag(i+1, items[i])
    }
}
function CreateOptionTag(value , item)
{
    let selectTag = document.querySelector('#emailtype');
    selectTag.appendChild(InsertIntoOptionTag(item , value , "input-tag-select"))
}

function AddCategoryToTable(obj)
{
    items = [];
    for(let i of obj)
    {
       

       items.push(i); 
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
getEnumEmailType();
