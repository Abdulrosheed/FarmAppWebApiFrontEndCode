var idValue = document.getElementById('col-m-1')
var orderReferenceValue = document.getElementById('col-m-2')
var companyEmailValue = document.getElementById('col-m-3')
var companyNameValue = document.getElementById('col-m-4')
var orderStatusValue = document.getElementById('col-m-5')

let farmProduct = [];
function GetElementById(id)
{
    var referenceNumber = window.location.href.split('=')[1];
    console.log(referenceNumber);
    console.log(typeof(referenceNumber))
    
    fetch("https://localhost:5001/api/Order/GetOrderByOrderReferenceNumber/" + referenceNumber)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
        console.log(value)
        console.log(value.data.orderReference)
       
     
        idValue.innerText = value.data.id;
        orderReferenceValue.innerText = value.data.orderReference;
        companyEmailValue.innerText = value.data.companyEmail;
        companyNameValue.innerText = value.data.companyName;
        orderStatusValue.innerText = value.data.status;
    
         
        console.log(value.data.orderProducts)
        AddItem(value.data.orderProducts)
    
        
    
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
    table.append(createDdTag("col-sm-10" , "col-sm-11" , element.farmProduct ))
    console.log(createDdTag("col-sm-10" , "col-sm-11" , element.farmProduct ))

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
