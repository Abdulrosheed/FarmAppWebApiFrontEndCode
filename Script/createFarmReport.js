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
var divTag = document.querySelector('.form-tag')
var farmProductValue;
var farmQuantityValue;
var selectTagInput;
var farmProductHarvestPeriodValue;


var numberofProducts;
var FarmerId;
var FarmId;
var farms;


function GetElementById(id)
{
    var id = window.location.href.split('=')[1];

    
    fetch("https://localhost:5001/api/Farm/GetFarm/" + id)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
        console.log(value);
    
        
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
        FarmerId = value.data.farmerId;
        FarmId = value.data.id
     
        
        numberofProducts = value.data.farmProduces.length;
        
        
         console.log(numberofProducts)
        
        CreateForm()
    
        
    
    })
    
}



const CreateFarmReport = (i) => {
 var x = `form-tag${i}`;
  var id = `farm-grade-type${i}`
   let createFarmFormTag = document.getElementById(x)
   console.log(createFarmFormTag)



    let data2 = new FormData(createFarmFormTag);
    console.log(data2)
    var token = localStorage.getItem('farmInspector')
    console.log(data2);
    fetch("https://localhost:5001/api/FarmInspector/CreateFarmReport", {
        method: 'POST',
        body: data2,
      
        headers : {
            "Authorization" : 'Bearer ' + token,
           
        }
        
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
           

            alert(data.message)
            
        })
        .catch(error => console.error(error));
}


const validateInputs = (farmProductValueInput,farmQuantityValueInput,farmProductGradeValueInput,farmProductHarvestPeriodValueInput) => {
    return farmProductValueInput.value.trim() == "" ||  farmQuantityValueInput.value.trim() == "" || farmProductGradeValueInput.value.trim() == "" ||  farmProductHarvestPeriodValueInput.value.trim() == ""
}




function CreateForm()
{
    
    for( let i = 0; i < numberofProducts; i++ )
    {
        
        createFormTemplate(i)
    }
}
function createFormTemplate(i)
{
    var formTag = document.createElement('form');
     formTag.id = `form-tag${i}`
     formTag.enctype = "multipart/form-data"
    var div1 = document.createElement('div');
    div1.classList.add('input')
    var div2 = document.createElement('div');
    div1.classList.add('bordered')
    let button = document.createElement('button');
    button.innerText = 'Submit';
    button.style.cursor = "pointer";
    button.id = ('btn-submit') ;
    var spanTag = document.createElement('span');
    spanTag.id = 'error-message'
    spanTag.classList.add('hidden');
    var selectTag = document.createElement('select');
    selectTag.id = `farm-grade-type${i}`
    selectTag.classList.add('farm-grade-type')
    selectTag.name = 'grade'

    var selectTag2 = document.createElement('select');
    selectTag2.id =  `farm-product${i}`
    selectTag2.classList.add('farm-grade-type')
    selectTag2.name = 'farmProduct'

    let optionTagSelect = document.createElement('option');
    optionTagSelect.value = "";
    optionTagSelect.innerText = '---SelectGrade----';
    selectTag.appendChild(optionTagSelect);

    let optionTagSelect2 = document.createElement('option');
    optionTagSelect2.value = "";
    optionTagSelect2.innerText = '---SelectFarmProduct----';
    selectTag2.appendChild(optionTagSelect2);

    let farmIdInputField = document.createElement('input');
    farmIdInputField.name = 'farmId';
    farmIdInputField.type = 'hidden';
    farmIdInputField.value = FarmId;

    let farmerIdInputField = document.createElement('input');
    farmerIdInputField.name = 'farmerId';
    farmerIdInputField.type = 'hidden';
    farmerIdInputField.value = FarmerId;
    getFarmProduct(i)
    getEnumFarmGradeType(i)

    //div2.appendChild(createInputTag('FarmProduct' , `farm-product${i}` , 'farmProduct' , 'text'))
    div2.appendChild(selectTag2);
    div2.appendChild(createInputTag('Quantity' , `farm-product-quantity${i}` , 'quantity' , 'number'))
    div2.appendChild(selectTag);
    div2.appendChild(createInputTag('HarvestedPeriod' , `farm-product-harvest-period${i}` , 'toBeHarvestedTime' , 'number'))
    div2.appendChild(createInputTag('ProductImage1' , `farm-product-image1-${i}` , 'farmProductImage1' , 'file'))
    div2.appendChild(createInputTag('ProductImage2' , `farm-product-image2-${i}` , 'farmProductImage2' , 'file'))
    div2.appendChild(farmIdInputField);
    div2.appendChild(farmerIdInputField);
    div1.appendChild(div2);
    formTag.appendChild(spanTag);
    formTag.appendChild(div1)
    formTag.appendChild(button)
    
    divTag.appendChild(formTag)

    //  farmProductValue = document.getElementById('farm-product')
    //  farmQuantityValue = document.getElementById('farm-product-quantity')
    //  selectTagInput = document.getElementById('farm-grade-type');
    //  farmProductHarvestPeriodValue = document.getElementById('farm-product-harvest-period')
    //  spanErrorMessage = document.getElementById('error-message')
   
    button.addEventListener('click' , function(e) {
        e.preventDefault()
        var id = `farm-grade-type${i}`
        var farmProductQuantity = `farm-product-quantity${i}`
        var farmProduct = `farm-product${i}`
        var harvestPeriod = `farm-product-harvest-period${i}`
       // console.log(id)
        farmProductValue = document.getElementById( farmProduct )
        farmQuantityValue = document.getElementById(farmProductQuantity)
        selectTagInput = document.getElementById(id);
        farmProductHarvestPeriodValue = document.getElementById(harvestPeriod)
        spanErrorMessage = document.getElementById('error-message')
        e.preventDefault();
        if (validateInputs(farmProductValue,farmQuantityValue,selectTagInput,farmProductHarvestPeriodValue)) {
            
            alert("Pls fill all the fields in thid form ")
            return;
        }
       
        
        formTag.classList.add('hidden')
    
        CreateFarmReport(i);
    })
  
}
function createInputTag(placeHolder , id , name, type )
{
   

    let inputTag = document.createElement('input');
    inputTag.placeholder = placeHolder;
    inputTag.name = name;
    inputTag.id = id;
    inputTag.type = type

    return inputTag;

}

function getFarmProduct(i)
{
    console.log("Hello")
    fetch("https://localhost:5001/api/FarmProduce/GetAllFarmProduce")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        console.log(value)
        AddCategoryToTable2(value.data , i);
    })
}

function getEnumFarmGradeType(i)
{
    console.log("Hello")
    fetch("https://localhost:5001/api/Enum/GetFarmGrade")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddCategoryToTable(value , i);
    })
}

function AddCategoryToTable(obj , i)
{
    items = []
    for(let i of obj)
    {
       

       items.push(i); 
    }
    loopItem(i);
}
function AddCategoryToTable2(obj , i)
{
    item2 = []
    for(let i of obj)
    {
       

       item2.push(i); 
    }
    loopItem2(i);
}
function loopItem2(i)
{
    console.log(i)
    var id = `farm-product${i}`
    let selectTag2 = document.getElementById(id);
    let tablerow2 = document.getElementsByClassName('input-tag-2')
    // for(let item of Array.from(tablerow))
    // {
        
    //     selectTag.removeChild(item)
    // }
    for(let i = 0; i < item2.length; i++)
    {
        
        CreateOptionTag(item2[i].name, item2[i].name,id)
    }
}
function loopItem(i)
{
    console.log(i)
    var id = `farm-grade-type${i}`
    let selectTag = document.getElementById(id);
    let tablerow = document.getElementsByClassName('input-tag')
    // for(let item of Array.from(tablerow))
    // {
        
    //     selectTag.removeChild(item)
    // }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTag(i+1, items[i],id)
    }
}
function CreateOptionTag2(value , item,id)
{
    let selectTag2 = document.getElementById(id);
    selectTag2.appendChild(InsertIntoOptionTag(item , value , "input-tag-2"))
}
function CreateOptionTag(value , item,id)
{
    let selectTag = document.getElementById(id);
    selectTag.appendChild(InsertIntoOptionTag(item , value , "input-tag"))
}
function InsertIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}
GetElementById()
