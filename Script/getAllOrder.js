
let item = [];
function removeItem(itemsss)
{

    let itemses = item.filter(i => i.email.toLowerCase() != itemsss.email.toLowerCase());
    item = itemses;
    loopItem();
}
function loopItem()
{
   
    let table = document.getElementById('container-row');
    let tablerow = document.getElementsByClassName('table-row')

    for(let item1 of Array.from(tablerow))
    {
    
        table.removeChild(item1)
    }
    console.log("Item:",item)
    var sn =0;
    item.forEach((element) => {
        sn++;
        createTdElement(element , sn)
     
    });
    
}

function createTdElement(item , sn)
{

    let table = document.getElementById('container-row');
    let divElement = document.createElement('div');
    let tr = document.createElement('tr');
    tr.classList.add('table-row');
    // let button2 = document.createElement('button');
    // button2.innerText = 'AssignFarmInspector';
    // button2.id = item.email;
    // button2.classList.add('btn-details');
    

    let button = document.createElement('button');
    button.innerText = 'Details';
    button.id = item.orderReference;
    button.classList.add('btn-details');
   
    // button2.addEventListener('click' , function(e)
    // {
        
        
    //     window.location.href = `/Html/AssignFarmInspectorPage.html?id=${e.target.id}`
    
    
    // });
    button.addEventListener('click' , function(e)
    {
        
        
        window.location.href = `/Html/orderDetails.html?id=${e.target.id}`
    
    
    });
  

     let td = InsertIntoTd("table-data" , "" );
    td.appendChild(button);
    // let td2 = InsertIntoTd("table-data" , "" );
    // td2.appendChild(button2);

    
    tr.appendChild(InsertIntoTd("table-data" , sn ));
    tr.appendChild(InsertIntoTd("table-data" , item.orderReference ));
    tr.appendChild(InsertIntoTd("table-data" , item.companyEmail ));
    tr.appendChild(InsertIntoTd("table-data" , item.companyName ));
    tr.appendChild(InsertIntoTd("table-data" , item.status));

    tr.appendChild(td);
    // tr.appendChild(td2);
  
  
     
    
    
    table.appendChild(tr);
    
  

    
}

function InsertIntoTd(classname , text)
{
    let td = document.createElement('td');
    td.classList.add(classname);
    td.innerText = text;
    return td;
}
function getAll()
{
    fetch("https://localhost:5001/api/Order/GetAllOrders")
    .then(function(response)
    {
        return response.json()
    }).then(function(value)
    {
        console.log(value.data);
        AddItemToArray(value.data);
    })
}
function AddItemToArray(obj)
{
    item = obj;
   

    loopItem();
}
// function DeleteIteminDb(id)
// {
    
    
//     fetch("https://localhost:5001/api/Farmer/UpdateFarmerStatusToDecline/" + id, {
//         method : "PUT"
//     })
//     .then(function(value)
//     {
//         console.log("done")
//     })
//     .catch(function(res)
//     {
//         console.log("notsucessfull")
//     })
    
//     getAll();  
// }
getAll()
