const registerInputFirstName = document.querySelector('#name-input');
// const registerInputLastName = document.querySelector('#lastname-input');
const registerEmail = document.querySelector('#email-input');
const registerUserName = document.querySelector('#user-name-input');
const registerInputPassWord = document.querySelector('#pass-word-input');


const registerInputSubmitBtn = document.querySelector('#btn-submit');
const registerPhoneNumber = document.querySelector('#phone-number-input');
const spanErrorMessage = document.querySelector('#error-message');
const countryselectTag = document.querySelector('#country-select-tag');
const stateSelectTag = document.querySelector('#state-select-tag');
const citySelectTag = document.querySelector('#local-government-select-tag');
const farmRegisterForm = document.querySelector('#form-tag')


let userDetails = {};
var country = []; 
var state = []; 
var city = [];
var enums = 
[

]


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


const registerUserRequest = () => {
    let dd = new FormData(farmRegisterForm);

   
    fetch('https://localhost:5001/api/Company/RegisterCompany', {
        method: 'POST',
        body: dd

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert(data.message)
        })
        .catch(error => console.error(error));
}


const validateInputs = (userNameInput, passwordInput,emailInput,
    firstNameInput,countryInput,stateInput,localGovernmentInput,phonenumber) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == "" || emailInput.value.trim() == "" || 
      firstNameInput.value.trim() == "" ||  countryInput.value.trim() == "" ||  stateInput.value.trim() == "" ||  localGovernmentInput.value.trim() == ""  || phonenumber.value.trim() == "";
}


registerInputSubmitBtn.addEventListener('click', function(e)  {
    e.preventDefault();
    if (validateInputs(registerUserName, registerInputPassWord,registerEmail,registerInputFirstName,countryselectTag,stateSelectTag,
        citySelectTag,registerPhoneNumber)) {
      alert("Pls fill all the fields in this form")
        return;
    }

   

    registerUserRequest();
})


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





