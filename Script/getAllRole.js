
let item = [];
function removeItem(itemsss)
{

    let itemses = item.filter(i => i.name.toLowerCase() != itemsss.name.toLowerCase());
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
    // let button2 = document.createElement('button');
    // button2.innerText = 'Details';
    // button2.id = item.id;
    // button2.classList.add('btn-details');

    let button3 = document.createElement('button');
    button3.innerText = 'Update';
    button3.id = item.id;
    button3.classList.add('btn-update');
    

    let button = document.createElement('button');
    button.innerText = 'Delete';
    button.classList.add('btn-delete');

    button.addEventListener('click' , function()
    {
        removeItem(item);
        loopItem();
        DeleteIteminDb(item.id);
      
        


    });
    // button2.addEventListener('click' , function(e)
    // {
        
        
    //     window.location.href = `/Html/GetRoleDetails.html?id=${e.target.id}`
    
    
    // });
    button3.addEventListener('click' , function(e)
    {
        
        
        window.location.href = `/Html/updateRole.html?id=${e.target.id}`
    
    
    });

    let td = InsertIntoTd("table-data" , "" );
    td.appendChild(button);
    // let td2 = InsertIntoTd("table-data" , "" );
    // td2.appendChild(button2);
    let td3 = InsertIntoTd("table-data" , "" );
    td3.appendChild(button3)

    

    tr.appendChild(InsertIntoTd("table-data" , item.id ));
    tr.appendChild(InsertIntoTd("table-data" , item.name ));
    tr.appendChild(InsertIntoTd("table-data" , item.description ));
   
    // tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td);
    
    
    
  
     
    
    // console.log(tr);
    table.appendChild(tr);
    
  

    
}

function InsertIntoTd(classname , text)
{
    let td = document.createElement('td');
    td.classList.add(classname);
    td.innerText = text;
    return td;
}
function getAllAdmin()
{
    fetch("https://localhost:5001/api/Role/GetAllRoles")
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
function DeleteIteminDb(id)
{
    
    
    fetch("https://localhost:5001/api/Role/DeleteRole/" + id, {
        method : "DELETE"
    })
    .then(function(value)
    {
        console.log("done")
        getAllAdmin();
    })
    .catch(function(res)
    {
        console.log("notsucessfull")
    })
    
     
}
getAllAdmin()
