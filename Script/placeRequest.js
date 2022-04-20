
const selectFarmProduce = document.querySelector('#farm-produce-id');
const dateNeeded = document.querySelector('#date');
const quantity = document.querySelector('#quantity-input');
const selectFarmGrade = document.querySelector('#farm-grade-id');
const btnSubmit = document.querySelector('#btn-submit');





var itemFarmProduce = [];
var itemFarmGrade = [];

var token = localStorage.getItem('company')




const farmRegisterUserRequest = () => {
    let data = 
    {
        yearNeeded : dateNeeded.value.split('-')[0],
        monthNeeded : dateNeeded.value.split('-')[1],
        quantity : parseInt(quantity.value),
        farmProduceId : parseInt(selectFarmProduce.value),
        grade : parseInt(selectFarmGrade.value)
        

    }

   console.log(data)
   console.log(token)
    fetch('https://localhost:5001/api/Request/CreateRequest', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Authorization": 'Bearer ' + token,
            'Content-Type': 'application/json'
        }

    }).then(response => response.json())
        .then(data => {
            console.log(data)


            alert(data.message)

        })
        .catch(error => console.error(error));
}


const validateInputs = (date,farmGrade,quantity,farmProduce) => {
    return  date.value.trim() == "" || farmGrade.value.trim() == "" || quantity.value.trim() == "" || farmProduce.value.trim() == ""
}


btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateInputs(dateNeeded, selectFarmGrade, quantity, selectFarmProduce)) {
        alert("Pls fill all the fields in this form")
        return;
    }



    farmRegisterUserRequest();
})




function getAllFarmProduce() {
    fetch("https://localhost:5001/api/FarmProduce/GetAllFarmProduce")
        .then(function (response) {

            return response.json();
        })
        .then(function (value) {
            AddFarmProduceToTable(value.data);
            console.log(value)
        })
}


function loopItemFarmProduce() {
    let selectTagFarmProduce = document.querySelector('#farm-produce-id');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for (let item of Array.from(tablerow)) {

        selectTagFarmProduce.removeChild(item)
    }
    for (let i = 0; i < itemFarmProduce.length; i++) {

        CreateOptionTagFarmProduce(itemFarmProduce[i].id, itemFarmProduce[i].name)
    }
}
function CreateOptionTagFarmProduce(value, item) {
    let selectTagFarmProduce = document.querySelector('#farm-produce-id');
    selectTagFarmProduce.appendChild(InsertIntoOptionTag(item, value, "input-tag-select"))
}

function AddFarmProduceToTable(obj) {
    itemFarmProduce = [];
    for (let i of obj) {


        itemFarmProduce.push(i);
    }

    loopItemFarmProduce();
}


function getEnumFarmGradeType(i)
{
   
    fetch("https://localhost:5001/api/Enum/GetFarmGrade")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddCategoryToTable(value);
    })
}

function AddCategoryToTable(obj)
{
    itemFarmGrade = []
    for(let i of obj)
    {
       

       itemFarmGrade.push(i); 
    }
    loopItem();
}
function loopItem()
{
   
   
    let selectTag = document.getElementById('farm-grade-id');
    let tablerow = document.getElementsByClassName('input-tag-farm-grade')
    for(let item of Array.from(tablerow))
    {
        
        selectTag.removeChild(item)
    }
    for(let i = 0; i < itemFarmGrade.length; i++)
    {
        
        CreateOptionTag(i+1, itemFarmGrade[i])
    }
}
function CreateOptionTag(value , item)
{
    let selectTag = document.getElementById('farm-grade-id');
    selectTag.appendChild(InsertIntoOptionTag(item , value , "input-tag-farm-grade"))
}
function InsertIntoOptionTag(text, value, classname) {
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}

getEnumFarmGradeType()
getAllFarmProduce();

