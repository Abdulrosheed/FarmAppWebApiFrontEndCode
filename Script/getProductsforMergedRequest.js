let submitBtn = document.getElementById('btn-submit');
let item = [];
let item2 = [];
var itemId = [];

let divContainer2 = document.createElement('div');
divContainer2.classList.add('form-check');


let inputTag2 = document.createElement('input');
inputTag2.classList.add('form-check-input');
inputTag2.type = 'radio';
inputTag2.setAttribute('name' , 'exampleRadios');
inputTag2.id = 'exampleRadios'
inputTag2.value = "";
let labelTag2 = document.createElement('label');
labelTag2.classList.add('form-check-label');
labelTag2.setAttribute('for' , 'exampleRadios1')





function removeItem(itemsss) {

    let itemses = item.filter(i => i.email.toLowerCase() != itemsss.email.toLowerCase());
    item = itemses;
    loopItem();
}
function loopItem() {

    let table = document.getElementById('container-row');
    let tablerow = document.getElementsByClassName('table-row')

    for (let item1 of Array.from(tablerow)) {

        table.removeChild(item1)
    }
    var sn = 0;
    console.log("Item:", item)
    item.forEach((element) => {
       sn++;
        createTdElement(element,sn)

    });

}
function loopItem2() {

    let table = document.getElementById('container-row');
    let tablerow = document.getElementsByClassName('table-row')

    for (let item1 of Array.from(tablerow)) {

        table.removeChild(item1)
    }
    var sn = 0;
    console.log("Item:", item)
    item2.forEach((element) => {
       sn++;
        createTdElement2(element,sn)

    });

}

function createTdElement(item , sn) {

    let table = document.getElementById('container-row');
    let divElement = document.createElement('div');
    let tr = document.createElement('tr');
    tr.classList.add('table-row');
    let button = document.createElement('button');
    button.innerText = 'Details';
    button.id = item.farmerId;
    button.classList.add('btn-details');
    let td2 = document.createElement("td");
    let td3 = document.createElement("td")
 
    let divContainer = document.createElement('div');
    divContainer.classList.add('form-check');
    

    let inputTag = document.createElement('input');
    inputTag.classList.add('form-check-input');
    inputTag.type = 'radio';
    inputTag.setAttribute('name' , 'exampleRadios');
    inputTag.id = 'exampleRadios'
    inputTag.value = item.id

    let labelTag = document.createElement('label');
    
    td2.appendChild(inputTag)
    td2.appendChild(labelTag)
    labelTag.classList.add('form-check-label');
    labelTag.setAttribute('for' , 'exampleRadios1')
    tr.appendChild(td2)
    tr.appendChild(InsertIntoTd("table-data", item.farmerName));
    tr.appendChild(InsertIntoTd("table-data", item.farmerEmail));
    tr.appendChild(InsertIntoTd("table-data", item.farmName));
    tr.appendChild(InsertIntoTd("table-data", item.price));
    tr.appendChild(InsertIntoTd("table-data", item.farmCountry));
    tr.appendChild(InsertIntoTd("table-data", item.farmState));
    tr.appendChild(InsertIntoTd("table-data", item.farmCity));

  
    button.addEventListener('click', function (e) {


        window.location.href = `/Html/farmerDetails.html?id=${e.target.id}`


    });

  


    let td = InsertIntoTd("table-data", "");
    td.appendChild(button);

   
    tr.appendChild(td)
    table.appendChild(tr);




}


function createTdElement2(item , sn) {

    let table = document.getElementById('container-row');
    let divElement = document.createElement('div');
    let tr3 = document.createElement('tr');
    tr3.classList.add('table-row');
    let button = document.createElement('button');
    button.innerText = 'Details';
    button.id = item.farmerId;
    button.classList.add('btn-details');
 
    let td3 = document.createElement("td")
    console.log(`${item.id},`)
    inputTag2.value += `${item.id},`
    
    // let divContainer = document.createElement('div');
    // divContainer.classList.add('form-check');
    

    // let inputTag = document.createElement('input');
    // inputTag.classList.add('form-check-input');
    // inputTag.type = 'radio';
    // inputTag.setAttribute('name' , 'exampleRadios');
    // inputTag.id = 'exampleRadios'
    // inputTag.value = item.id

    
    
    
    if(sn == 1)
    {
        let td2 = document.createElement("td");
        td2.appendChild(inputTag2)
        td2.appendChild(labelTag2)
        
        tr3.appendChild(td2)
    }
    else{
        tr3.appendChild(InsertIntoTd("table-data", ""))
    }
    
    tr3.appendChild(InsertIntoTd("table-data", item.farmerName));
    tr3.appendChild(InsertIntoTd("table-data", item.farmerEmail));
    tr3.appendChild(InsertIntoTd("table-data", item.farmName));
    tr3.appendChild(InsertIntoTd("table-data", item.price));
    tr3.appendChild(InsertIntoTd("table-data", item.quantity));
    tr3.appendChild(InsertIntoTd("table-data", item.farmCountry));
    tr3.appendChild(InsertIntoTd("table-data", item.farmState));
    tr3.appendChild(InsertIntoTd("table-data", item.farmCity));

  
    button.addEventListener('click', function (e) {


        window.location.href = `/Html/farmerDetails.html?id=${e.target.id}`


    });

  


    let td = InsertIntoTd("table-data", "");
    td.appendChild(button);

   
    tr3.appendChild(td)
    table.appendChild(tr3);




}

function InsertIntoTd(classname, text) {
    let td = document.createElement('td');
    td.classList.add(classname);
    td.innerText = text;
    return td;
}
function getAll() {
    console.log("Processing")
    var token = localStorage.getItem('company')
    var id = window.location.href.split('=')[1];
    fetch("https://localhost:5001/api/FarmProduct/SearchRequest/" + id, {
        headers: {
            "Authorization": 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (value) {
            console.log(value.data);
            if(value.data[0].pullResources)
            {
                AddItemToArray2(value.data)
            }
            else{
                AddItemToArray(value.data);
            }
            
        })
}
function AddItemToArray(obj) {
    item = obj;


    loopItem();
}
function AddItemToArray2(obj) {
    item2 = obj;


    loopItem2();
}
submitBtn.addEventListener('click',function()
{
    var productItems = [];
    var isChoosen = false;
    let inputTags = document.getElementsByClassName('form-check-input');
    if(Array.from(inputTags).length == 1)
    {
        
        for(let item of Array.from(inputTags))
        {
          
          if(item.checked == true)
          {
            let split = item.value.split(',');
           for(let i = 0 ; i < split.length-1 ; i++)
             
            productItems.push(split[i])
            isChoosen = true;
            console.log(productItems)
            break;
          }
        }
    }
    else
    {
        for(let item of Array.from(inputTags))
        {
        
          if(item.checked == true)
          {
            productItems.push(item.value)
            isChoosen = true;
            console.log(item.value)
            break;
          }
        }
    }
   
    if(isChoosen)
    {
        var id = window.location.href.split('=')[1];
        CreateOrder(productItems ,id)
    }
    else{
        alert("Pls choose an option")
    }
})

function CreateOrder( obj , id)
{
    let data = {
        requestId : id,
        farmProductId: obj
    }
    console.log(data);
    fetch('https://localhost:5001/api/Order/CreateOrder', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        },
        
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
            
            alert(data.message)
            window.location.href = '/Html/companyDashboard.html'
            
        })
    .catch(error => console.error(error));
}
getAll()

