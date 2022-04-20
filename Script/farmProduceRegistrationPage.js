const InputName = document.querySelector('#name-input');
const InputDescription = document.querySelector('#description-input');
let spanErrorMessage = document.querySelector('#error-message');
const InputSubmitBtn = document.querySelector('#btn-submit');
var select = document.querySelector('#categories');


var items = 
[

]
var farmCategory;
select.onchange = function() {
    farmCategory = [];
   var values = [].map.call(this.selectedOptions, function(opt){
    farmCategory.push(opt.value);
     console.log(farmCategory);
   });
 };

const registerFarmProduce = () => {
    let data = 
    {
        name : InputName.value,
        password : InputDescription.value,
        categoriesids : farmCategory,

    }
    
    console.log(data);
    fetch('https://localhost:5001/api/FarmProduce/RegisterFarmProduce', {
        method: 'POST',
        body : JSON.stringify(data),
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
        alert("Pls fill all the field in this form")
            return;
        }
    
     
    
        registerFarmProduce();
        
})


function getAllCategories()
{
    
    fetch("https://localhost:5001/api/Category/GetAllCategories" , 
    {
       
    })
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddCategoryToTable(value.data);
        console.log(value)
    })
}


function loopItem()
{
    let selectTag = document.querySelector('#categories');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for(let item of Array.from(tablerow))
    {
        
        selectTag.removeChild(item)
    }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTag(items[i].id, items[i].name)
    }
}
function CreateOptionTag(value , item)
{
    let selectTag = document.querySelector('#categories');
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
getAllCategories();
