
const registerFarmInputCountry = document.querySelector('#country');

const registerFarmInputState = document.querySelector('#state');

const registerFarmInputLocalGovernment = document.querySelector('#localGovernment');

const registerInputFarmImage1 = document.querySelector('#farm-picture1-input ');

const farmRegisterForm = document.querySelector('#register-form')

const registerInputFarmName = document.querySelector('#farm-name-input');
const select = document.querySelector('#farm-produce-ids');

const registerInputFarmImage2 = document.querySelector('#farm-picture2-input ');

const registerInputSubmitBtn = document.querySelector('#btn-submit');
const countryselectTag = document.querySelector('#country-select-tag');
const stateSelectTag = document.querySelector('#state-select-tag');
const citySelectTag = document.querySelector('#local-government-select-tag');

let spanErrorMessage = document.querySelector('#error-message');
const registerLandSizeInput = document.querySelector('#land-size-input');


let userDetails = {};
var item = [];
var itemEnum = [];
var country = []; 
var state = []; 
var city = [];
var token = localStorage.getItem('farmer')
// const formData = new FormData();
// formData.append("registerInputFarmImage1", registerInputFarmImage1.files[0]);


// const formData2 = new FormData();
// formData2.append("registerInputFarmImage2", registerInputFarmImage2.files[0]);

console.log(token);
var farmProduceIds;
select.onchange = function () {
    farmProduceIds = [];
    var values = [].map.call(this.selectedOptions, function (opt) {
        farmProduceIds.push(opt.value);
        console.log(farmProduceIds);
    });
};

countryselectTag.addEventListener('change', function(event)
{
    var x = event.target.value
    AddState(x)
})

function AddState(value)
{
    console.log(value)
    data = {
        "country": value
    }
    console.log("Hi")
    fetch("https://countriesnow.space/api/v0.1/countries/cities",{
        method : 'POST',
        body :JSON.stringify(data),
        headers : 
        {
            'Content-Type': 'application/json',
        }
  }).then(function(value)
  {
      console.log(value)
      console.log("processing")
      return value.json()
  }).then(function(res)
  {
      AddStateToTable(res.data)
      console.log(res.data)

  }).catch(function(error)
  {
      console.log(error)
  })
}

stateSelectTag.addEventListener('change', function(event)
{
    var country = document.getElementById('country-select-tag').value
    AddCity(event.target.value , country)
})
function AddCity(res,country)
{
    data = {
        "country": country,
        "state" : res
    }
    console.log("Hi")
    fetch("https://countriesnow.space/api/v0.1/countries/state/cities",{
        method : 'POST',
        body :JSON.stringify(data),
        headers : 
        {
            'Content-Type': 'application/json',
        }
  }).then(function(value)
  {
      console.log(value)
      console.log("processing")
      return value.json()
  }).then(function(res)
  {
      AddCityToTable(res.data)
      console.log(res.data)

  }).catch(function(error)
  {
      console.log(error)
  })
}

const farmRegisterUserRequest = () => {

    let dd = new FormData(farmRegisterForm);
    // let data =
    // {

    //     name: registerInputFarmName.value,
    //     landsize: registerLandSizeInput.value,
    //     state: registerFarmInputState.value,
    //     country: registerFarmInputCountry.value,
    //     localGoverment: registerFarmInputLocalGovernment.value,
    //     farmproduceids: farmProduceIds,
    //     // farmPicture1 :formData,
    //     // farmPicture2 :formData2


    // }
    // console.log(registerInputFarmName.value)
    // console.log(data);
    console.log(dd)
    console.log("making request")
    fetch('https://localhost:5001/api/Farm/RegisterFarm', {
        method: 'POST',
        body: dd,
        headers: {
            "Authorization": 'Bearer ' + token,
        }

    }).then(response => response.json())
        .then(data => {
            console.log(data)


            alert(data.message)

        })
        .catch(error => console.error(error));
}


const validateInputs = (userNameInput, passwordInput,emailInput,lastNameInput,
    firstNameInput,countryInput) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == "" || emailInput.value.trim() == "" ||  lastNameInput.value.trim() == ""
    ||  firstNameInput.value.trim() == "" ||  countryInput.value.trim() == "" 
}


registerInputSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateInputs(countryselectTag, registerInputFarmName, stateSelectTag, select, citySelectTag, registerLandSizeInput)) {
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
    let selectTagFarmProduce = document.querySelector('#farm-produce-ids');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for (let item of Array.from(tablerow)) {

        selectTagFarmProduce.removeChild(item)
    }
    for (let i = 0; i < items.length; i++) {

        CreateOptionTagFarmProduce(items[i].id, items[i].name)
    }
}
function CreateOptionTagFarmProduce(value, item) {
    let selectTagFarmProduce = document.querySelector('#farm-produce-ids');
    selectTagFarmProduce.appendChild(InsertIntoOptionTag(item, value, "input-tag-select"))
}

function AddFarmProduceToTable(obj) {
    items = [];
    for (let i of obj) {


        items.push(i);
    }
    console.log(items)
    loopItemFarmProduce();
}
function InsertIntoOptionTag(text, value, classname) {
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}


function getCountry()
{
    fetch("https://restcountries.com/v2/all")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        console.log(value);
        AddCountryToTable(value);
       // console.log(value)
    })
}
function AddCountryToTable(obj)
{
    country = [];
    for(let i of obj)
    {
       
        console.log(i.name)
        
        country.push(i.name); 
    }

    loopItem()
}
function AddStateToTable(obj)
{
    state = [];
    for(let i of obj)
    {
       
        console.log(i)
        
        state.push(i); 
    }

    loopItemState()
}
function AddCityToTable(obj)
{
    city = [];
    for(let i of obj)
    {
       
        console.log(i)
        
        city.push(i); 
    }

    loopItemCity()
}

function loopItem()
{
    
    let countrySelectTag = document.querySelector('#country-select-tag');

    let countryTableRow = document.getElementsByClassName('input-tag-country')
  
    for(let item of Array.from(countryTableRow))
    {
        
        countrySelectTag.removeChild(item)
    }
   
    for(let i = 0; i < country.length; i++)
    {
      
        CreateCountryOptionTag(country[i], country[i])
        
    }
}


function loopItemCity()
{
    let citySelectTag = document.querySelector('#local-government-select-tag');
    let cityTableRow = document.getElementsByClassName('input-tag-city')
    for(let item of Array.from(cityTableRow))
    {
        
        citySelectTag.removeChild(item)
    }
    for(let i = 0; i < city.length; i++)
    {
        
        CreatecityOptionTag(city[i], city[i])
        
    }
}

function loopItemState()
{
    let stateSelectTag = document.querySelector('#state-select-tag');
    let stateTableRow = document.getElementsByClassName('input-tag-state')
    for(let item of Array.from(stateTableRow))
    {
        
        stateSelectTag.removeChild(item)
    }
    for(let i = 0; i < state.length; i++)
    {
        
        CreatestateOptionTag(state[i], state[i])
        
    }
}

function CreateCountryOptionTag(value , item)
{
    let selectTag = document.querySelector('#country-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-country"))
}
function CreatestateOptionTag(value , item)
{
    let selectTag = document.querySelector('#state-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-state"))
}
function CreatecityOptionTag(value , item)
{
    let selectTag = document.getElementById('local-government-select-tag');
    console.log(selectTag)
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-city"))
}

function InsertEnumIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}

getCountry();
getAllFarmProduce();

