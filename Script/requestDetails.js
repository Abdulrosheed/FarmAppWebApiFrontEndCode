var companyNameValue = document.getElementById('col-m-1')
var farmProduceValue = document.getElementById('col-m-2')
var quantityValue = document.getElementById('col-m-3')
var gradeValue = document.getElementById('col-m-4')
var yearNeededValue = document.getElementById('col-m-5')
var monthNeededValue = document.getElementById('col-m-7')
var statusValue = document.getElementById('col-m-6')

let farmProduct = [];
function GetElementById(id)
{
    var id = window.location.href.split('=')[1];
    console.log(id);
    
    
    fetch("https://localhost:5001/api/Request/RequestDetails/" + id)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(value)
    {
        console.log(value)
        console.log(value.data.orderReference)
       
     
        companyNameValue.innerText = value.data.companyName;
        farmProduceValue.innerText = value.data.farmProduce;
        quantityValue.innerText = value.data.quantity;
        gradeValue.innerText = value.data.grade;
        yearNeededValue.innerText = value.data.yearNeeded;
        monthNeededValue.innerText = value.data.monthNeeded;
        statusValue.innerText = value.data.status;
    
         
        console.log(value.data.orderProducts)
        AddItem(value.data.farmProducts)
    
        
    
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
