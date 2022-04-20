
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
    item.forEach((element) => {
        createTdElement(element)
     
    });
    
}

function createTdElement(item)
{

    let table = document.getElementById('container-row');
    let divElement = document.createElement('div');
    let tr = document.createElement('tr');
    tr.classList.add('table-row');
    let button2 = document.createElement('button');
    button2.innerText = 'Update Product';
    button2.id = item.id;
    button2.classList.add('btn-details');
    

    let button = document.createElement('button');
    button.innerText = 'Report Details';
    button.id = item.id;
    button.classList.add('btn-details');
   
    button2.addEventListener('click' , function(e)
    {
        
        
        window.location.href = `/Html/updateFarmProduct.html?id=${e.target.id}`
    
    
    });
    button.addEventListener('click' , function(e)
    {
        
        
        window.location.href = `/Html/farmProductDetails.html?id=${e.target.id}`
    
    
    });
  

     let td = InsertIntoTd("table-data" , "" );
    td.appendChild(button);
    let td2 = InsertIntoTd("table-data" , "" );
    td2.appendChild(button2);

    

    tr.appendChild(InsertIntoTd("table-data" , item.id ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmProduct ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmId ));
    tr.appendChild(InsertIntoTd("table-data" , item.grade ));
    tr.appendChild(InsertIntoTd("table-data" , item.quantity ));
    tr.appendChild(InsertIntoTd("table-data" , item.price ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmEmail));
    tr.appendChild(InsertIntoTd("table-data" , item.country));
    tr.appendChild(InsertIntoTd("table-data" , item.state));
    tr.appendChild(InsertIntoTd("table-data" , item.localGovernment));
    
    tr.appendChild(td2);
    tr.appendChild(td);
  
     
    
    
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
    var token = localStorage.getItem('farmInspector')
    fetch("https://localhost:5001/api/FarmProduct/GetToBeUpdatedFarmProductByFarmInspector" ,{
        headers : {
            "Authorization" : 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
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

getAll()
