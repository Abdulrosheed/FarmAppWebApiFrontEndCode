var idValue = document.getElementById('col-m-1')
var nameValue = document.getElementById('col-m-2')
var landSizeValue = document.getElementById('col-m-5')
var farmerEmailValue = document.getElementById('col-m-6')
var farmStatusValue = document.getElementById('col-m-7')
var countryValue = document.getElementById('col-m-8')
var stateValue = document.getElementById('col-m-9')
var localGovernmentValue = document.getElementById('col-m-10')
let farmProduct = [];
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
        console.log(value)
        console.log(value.data.landSize)
        nameValue.innerText = value.data.name;
        landSizeValue.innerText = value.data.landSize;
        countryValue.innerText = value.data.country;
        stateValue.innerText = value.data.state;
        localGovernmentValue.innerText = value.data.localGovernment;
        idValue.innerText = value.data.id;
        farmerEmailValue.innerText = value.data.farmerEmail;
        farmStatusValue.innerText = value.data.farmStatus;
         
        console.log(value.data.farmProduces)
        AddItem(value.data.farmProduces)
    
        
    
    })
    
}
function AddItem(obj)
{
    farmProduct = obj;
   
console.log("processing1")
    loopItem();
}
function loopItem()
{
    let table = document.getElementById('details-container');
    let tablerow = document.getElementsByClassName('col-sm-11')

    for(let item1 of Array.from(tablerow))
    {
    
        table.removeChild(item1)
    }
    
    farmProduct.forEach((element) => {
        createDdElement(element)
        console.log("processing2")
     
    });
}
function createDdElement(element)
{
    let table = document.getElementById('details-container');
    console.log(element.name)
    table.append(createDdTag("col-sm-10" , "col-sm-11" , element.name ))
    console.log(createDdTag("col-sm-10" , "col-sm-11" , element.name ))

}
function createDdTag(classname1 , className2 , text)
{
    var ddTag = document.createElement('dd');
    ddTag.classList.add(classname1);
    ddTag.classList.add(className2);
    ddTag.innerText =text;
    return ddTag
}

GetElementById()
