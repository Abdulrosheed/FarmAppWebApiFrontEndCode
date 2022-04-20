const registerInputFirstName = document.querySelector('#first-name-input');
const registerInputLastName = document.querySelector('#last-name-input');
const registerEmail = document.querySelector('#email-input');
const registerUserName = document.querySelector('#user-name-input');
const registerInputPassWord = document.querySelector('#pass-word-input');
const registerInputCountry = document.querySelector('#country-input');
const registerFarmInputCountry = document.querySelector('#farm-country-input');
const registerInputState = document.querySelector('#state-input');
const registerFarmInputState = document.querySelector('#farm-state-input');
const registerInputLocalGovernment = document.querySelector('#local-government-input');
const registerFarmInputLocalGovernment = document.querySelector('#farm-local-government-input');
const registerInputGender = document.querySelector('#gender-input');
const registerInputFarmName = document.querySelector('#farm-name-input');

const registerInputSubmitBtn = document.querySelector('#btn-submit');
const registerPhoneNumber = document.querySelector('#phone-number-input');
let spanErrorMessage = document.querySelector('#error-message');
const registerLandSizeInput = document.getElementById('land-size-input');
var select = document.querySelector('#farm-produce-ids');
var countryselectTag = document.querySelector('#country-select-tag');
var farmCountryselectTag = document.querySelector('#farm-country-select-tag');
var stateSelectTag = document.querySelector('#state-select-tag');
var farmStateSelectTag = document.querySelector('#farm-state-select-tag');
var citySelectTag = document.querySelector('#local-government-select-tag');
var farmCitySelectTag = document.querySelector('#farm-local-government-select-tag');
const farmRegisterForm = document.querySelector('#form-tag')
let userDetails = {};
var item = [];
var itemEnum = []; 
var country = []; 
var state = []; 
var city = [];
var farmCountry = [];
var farmState = [];
var farmCity = [];
countryselectTag.addEventListener('change', function(event)
{
    var x = event.target.value
    AddState(x)
})
farmCountryselectTag.addEventListener('change', function(event)
{
    var x = event.target.value
    AddFarmState(x)
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

function AddFarmState(value)
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
      AddFarmStateToTable(res.data)
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
farmStateSelectTag.addEventListener('change', function(event)
{
    var country = document.getElementById('farm-country-select-tag').value
    AddFarmCity(event.target.value , country)
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
function AddFarmCity(res,country)
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
      AddFarmCityToTable(res.data)
      console.log(res.data)

  }).catch(function(error)
  {
      console.log(error)
  })
}

var farmProduceIds;
    select.onchange = function() {
         farmProduceIds = [];
        var values = [].map.call(this.selectedOptions, function(opt){
          farmProduceIds.push(opt.value);
          console.log(farmProduceIds);
        });
      };





const registerUserRequest = () => {

    let dd = new FormData(farmRegisterForm);
   
    fetch('https://localhost:5001/api/Farmer/RegisterFarmer', {
        method: 'POST',
        body: dd,
      
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
           
            alert(data.message)
            
        })
        // .catch(error => console.error(error.json()));
}


const validateInputs = (userNameInput, passwordInput,emailInput,lastNameInput,
    firstNameInput,countryInput,stateInput,localGovernmentInput,genderInput,phonenumber,farmcountryInput,farmlocalgovernmentInput,farmnameInput,farmstateInput,farmproduceidsInput,landsizeInput) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == "" || emailInput.value.trim() == "" ||  lastNameInput.value.trim() == ""
    ||  firstNameInput.value.trim() == "" ||  countryInput.value.trim() == "" ||  stateInput.value.trim() == "" ||  localGovernmentInput.value.trim() == "" ||  genderInput.value.trim() == "" || phonenumber.value.trim() == ""
    || farmcountryInput.value.trim() == "" ||  farmnameInput.value.trim() == "" || farmstateInput.value.trim() == "" ||  farmproduceidsInput.value.trim() == "" || farmlocalgovernmentInput.value.trim() == "" || landsizeInput.value.trim() == ""
}


registerInputSubmitBtn.addEventListener('click', function(e)  {
    e.preventDefault();
    console.log(registerLandSizeInput.value)
    if (validateInputs(registerUserName, registerInputPassWord,registerEmail, registerInputLastName,registerInputFirstName,countryselectTag,stateSelectTag,
        citySelectTag,registerInputGender,registerPhoneNumber,farmCountryselectTag,farmCitySelectTag,registerInputFarmName,farmStateSelectTag , select,registerLandSizeInput)) {
      alert("Pls fill in all this fields")
        return;
    }

   

    registerUserRequest();
})


function getEnumGender()
{
    fetch("https://localhost:5001/api/Enum/GetGenderEnum")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddEnumToTable(value);
       // console.log(value)
    })
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
function getFarmCountry()
{
    fetch("https://restcountries.com/v2/all")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        console.log(value);
        AddFarmCountryToTable(value);
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
function AddFarmCountryToTable(obj)
{
    farmCountry = [];
    for(let i of obj)
    {
       
        console.log(i.name)
        
        farmCountry.push(i.name); 
    }

    loopFarmItem()
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

function AddFarmStateToTable(obj)
{
    farmState = [];
    for(let i of obj)
    {
       
        console.log(i)
        
        farmState.push(i); 
    }

    loopItemFarmState()
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
function AddFarmCityToTable(obj)
{
    farmCity = [];
    for(let i of obj)
    {
       
        console.log(i)
        
        farmCity.push(i); 
    }

    loopItemFarmCity()
}
function AddEnumToTable(obj)
{
    itemEnum = [];
    for(let i of obj)
    {
       

        
        itemEnum.push(i); 
    }

    loopItem();
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

function loopItemFarmState()
{
    let farmStateSelectTag = document.querySelector('#farm-state-select-tag');
    let farmStateTableRow = document.getElementsByClassName('input-tag-state-farm')
    for(let item of Array.from(farmStateTableRow))
    {
        
        farmStateSelectTag.removeChild(item)
    }
    for(let i = 0; i < farmState.length; i++)
    {
        
        CreateFarmStateOptionTag(farmState[i], farmState[i])
        
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
function loopItemFarmCity()
{
    let farmCitySelectTag = document.querySelector('#farm-local-government-select-tag');
    let farmCityTableRow = document.getElementsByClassName('input-tag-city-farm')
    for(let item of Array.from(farmCityTableRow))
    {
        
        farmCitySelectTag.removeChild(item)
    }
    for(let i = 0; i < farmCity.length; i++)
    {
        
        CreateFarmCityOptionTag(farmCity[i], farmCity[i])
        
    }
}
function loopFarmItem()
{
    let farmCountrySelectTag = document.querySelector('#farm-country-select-tag');
    let farmCountryTableRow = document.getElementsByClassName('input-tag-farm-country')
    for(let item of Array.from(farmCountryTableRow))
    {
        
        farmCountrySelectTag.removeChild(item)
    }
    for(let i = 0; i < farmCountry.length; i++)
    {
        
        CreateFarmCountryOptionTag(farmCountry[i], farmCountry[i])
        
    }
}
function loopItem()
{
    let selectTag = document.querySelector('#gender-input');
    let countrySelectTag = document.querySelector('#country-select-tag');
  
    let tablerowEnum = document.getElementsByClassName('input-tag-enum')
    let countryTableRow = document.getElementsByClassName('input-tag-country')
    
    for(let item of Array.from(tablerowEnum))
    {
        
        selectTag.removeChild(item)
    }
    for(let item of Array.from(countryTableRow))
    {
        
        countrySelectTag.removeChild(item)
    }
 
    for(let i = 0; i < itemEnum.length; i++)
    {
        
        CreateOptionTag(i + 1, itemEnum[i])
    }
    for(let i = 0; i < country.length; i++)
    {
      
        CreateCountryOptionTag(country[i], country[i])
        
    }
   
}
function CreateOptionTag(value , item)
{
    let selectTag = document.querySelector('#gender-input');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-enum"))
}
function CreateCountryOptionTag(value , item)
{
    let selectTag = document.querySelector('#country-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-country"))
}
function CreateFarmCountryOptionTag(value , item)
{
    let selectTag = document.querySelector('#farm-country-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-farm-country"))
}
function CreatestateOptionTag(value , item)
{
    let selectTag = document.querySelector('#state-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-state"))
}
function CreateFarmStateOptionTag(value , item)
{
    let selectTag = document.querySelector('#farm-state-select-tag');
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-state-farm"))
}

function CreatecityOptionTag(value , item)
{
    let selectTag = document.getElementById('local-government-select-tag');
    console.log(selectTag)
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-city"))
}
function CreateFarmCityOptionTag(value , item)
{
    let selectTag = document.getElementById('farm-local-government-select-tag');
    console.log(selectTag)
    selectTag.appendChild(InsertEnumIntoOptionTag(item , value , "input-tag-city-farm"))
}

function InsertEnumIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}

getEnumGender();


function getAllFarmProduce()
{
    let token = localStorage.getItem("admin")
    console.log(token)
    fetch("https://localhost:5001/api/FarmProduce/GetAllFarmProduce")
    .then(function(response)
    {
        
        return response.json();
    })
    .then(function(value)
    {
        AddFarmProduceToTable(value.data);
        console.log(value)
    })
}


function loopItemFarmProduce()
{
    let selectTagFarmProduce = document.querySelector('#farm-produce-ids');
    let tablerow = document.getElementsByClassName('input-tag-select')
    for(let item of Array.from(tablerow))
    {
        
        selectTagFarmProduce.removeChild(item)
    }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTagFarmProduce(items[i].id, items[i].name)
    }
}
function CreateOptionTagFarmProduce(value , item)
{
    let selectTagFarmProduce = document.querySelector('#farm-produce-ids');
    selectTagFarmProduce.appendChild(InsertIntoOptionTag(item , value , "input-tag-select"))
}

function AddFarmProduceToTable(obj)
{
    items = [];
    for(let i of obj)
    {
       

       items.push(i); 
    }
    console.log(items)
    loopItemFarmProduce();
}
function InsertIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
}

getAllFarmProduce();
getCountry();
getFarmCountry();

