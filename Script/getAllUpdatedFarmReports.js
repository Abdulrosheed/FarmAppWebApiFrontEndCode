
let item = [];
// function removeItem(itemsss)
// {

//     let itemses = item.filter(i => i.email.toLowerCase() != itemsss.email.toLowerCase());
//     item = itemses;
//     loopItem();
// }
var farmReportGrade;
var farmReportQuantity;
var farmReportHarvestedTime;
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
    button2.innerText = 'Details';
    button2.id = item.id;
    button2.classList.add('btn-details');
    

    let button = document.createElement('button');
    button.innerText = 'Approve';
    button.classList.add('btn-approve');

    let button3 = document.createElement('button');
    button3.innerText = 'Decline';
    button3.id = item.id;
    button3.classList.add('btn-decline');

    button.addEventListener('click' , function(e)
    {
        farmReportGrade = item.grade;
        farmReportQuantity = item.quantity;
        farmReportHarvestedTime = item.harvestedTime;
        ApproveFarmReport(item.id)
     
    });
    button3.addEventListener('click' , function(e)
    {

        DeclineFarmReport(item.id)

    });

    button2.addEventListener('click' , function(e)
    {
        
        
        window.location.href = `/Html/GetFarmReportDetails.html?id=${e.target.id}`
    
    
    });
  

    let td = InsertIntoTd("table-data" , "" );
    td.appendChild(button2);
    let td2 = InsertIntoTd("table-data" , "" );
    td2.appendChild(button);
    let td3 = InsertIntoTd("table-data" , "" );
    td2.appendChild(button3);


    
    tr.appendChild(InsertIntoTd("table-data" , item.id ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmProduct ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmId ));
    tr.appendChild(InsertIntoTd("table-data" , item.grade ));
    tr.appendChild(InsertIntoTd("table-data" , item.quantity ));
    tr.appendChild(InsertIntoTd("table-data" , item.farmEmail));
    tr.appendChild(InsertIntoTd("table-data" , item.country));
    tr.appendChild(InsertIntoTd("table-data" , item.state));
    tr.appendChild(InsertIntoTd("table-data" , item.localGovernment));
    // tr.appendChild(divElement.appendChild(InsertIntoTd("table-data" , item.lastName)));
    tr.appendChild(td2);
    tr.appendChild(td);
    tr.appendChild(td3);
  
     
    
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
function getAllFarmReports()
{
    fetch("https://localhost:5001/api/FarmReport/GetAllUpdatedFarmReport")
    .then(function(response)
    {
        return response.json()
    }).then(function(value)
    {
        console.log(value)
        console.log(value.data);
       

        AddItemToArray(value.data);
    })
}
function AddItemToArray(obj)
{
    item = obj;
   

    loopItem();
}

function ApproveFarmReport(id)
{
    // console.log(farmProductValue)
    let data = 
    {
        
       
        quantity : farmReportQuantity,
        grade : farmReportGrade,
      
        tobeharvestedtime : farmReportHarvestedTime
        
        
    }
    
    console.log(data)
    fetch("https://localhost:5001/api/FarmReport/UpdateFarmReport/" + id , 
    {
        method: 'PUT',
        
        headers: {
            'Content-Type': 'application/json',

        }
    })
    .then(function(value)
    {
        return value.json()
    })
    .catch(function(res)
    {
        console.log(res)
    })
    
    getAllFarmReports();  
}

function DeclineFarmReport(id)
{
    console.log(id)
    
    fetch("https://localhost:5001/api/FarmReport/DeclineFarmReport/" + id)
    .then(function(value)
    {
        return value.json()
    })
    .catch(function(res)
    {
        console.log(res)
    })
    
    getAllFarmReports();  
}
getAllFarmReports()
