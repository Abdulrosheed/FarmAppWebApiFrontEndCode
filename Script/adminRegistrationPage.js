const registerInputFirstName = document.querySelector('#first-name-input');
const registerInputLastName = document.querySelector('#last-name-input');
const registerEmail = document.querySelector('#email-input');
const registerUserName = document.querySelector('#user-name-input');
const registerInputPassWord = document.querySelector('#pass-word-input');
// const registerInputCountry = document.querySelector('#country-input');
// const registerInputState = document.querySelector('#state-input');
// const registerInputLocalGovernment = document.querySelector('#local-government-input');
const registerInputGender = document.querySelector('#gender-input');
const registerInputSubmitBtn = document.querySelector('#btn-submit');
const registerPhoneNumber = document.querySelector('#phone-number-input');
let spanErrorMessage = document.querySelector('#error-message');
var countrySelectTag = document.querySelector('#country-select-tag');
var stateSelectTag = document.querySelector('#state-select-tag');
var citySelectTag = document.querySelector('#local-government-select-tag');
const farmRegisterForm = document.querySelector('#form-tag')


let userDetails = {};
var country = []; 
var state = []; 
var city = [];
var enums = 
[

]

countrySelectTag.addEventListener('change', function(event)
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

const adminRegisterUserRequest = () => {

    let dd = new FormData(farmRegisterForm);
    //  console.log(userDetails);
    // let data = 
    // {
    //     firstname : registerInputFirstName.value,
    //     lastname : registerInputLastName.value,
    //     email :  registerEmail.value,
    //     phonenumber : registerPhoneNumber.value,
    //     gender : parseInt(registerInputGender.value),
    //     username : registerUserName.value,
    //     password : registerInputPassWord.value,
    //     state : registerInputState.value,
    //     country : registerInputCountry.value,
    //     localgovernment : registerInputLocalGovernment.value
    // }
    console.log(dd)
    
    fetch('https://localhost:5001/api/Admin/RegisterAdmin', {
        method: 'POST',
        body: dd,
      
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.isSuccess) {
                alert(data.message)
                window.location.href = '/Html/loginPage.html'
            }
            else {
             alert(data.message)
            }
        })
        .catch(error => console.error(error));
}


const validateInputs = (userNameInput, passwordInput,emailInput,lastNameInput,
    firstNameInput,countryInput,stateInput,localGovernmentInput,genderInput,phonenumber) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == "" || emailInput.value.trim() == "" ||  lastNameInput.value.trim() == ""
    ||  firstNameInput.value.trim() == "" ||  countryInput.value.trim() == "" ||  stateInput.value.trim() == "" ||  localGovernmentInput.value.trim() == "" ||  genderInput.value.trim() == "" || phonenumber.value.trim() == "";
}


registerInputSubmitBtn.addEventListener('click', function(e)  {
    e.preventDefault();
    if (validateInputs(registerUserName, registerInputPassWord,registerEmail, registerInputLastName,registerInputFirstName,countrySelectTag,stateSelectTag,
        citySelectTag,registerInputGender,registerPhoneNumber)) {
       alert("Pls fill in all the fields in this form")
        spanErrorMessage.classList.remove('hidden');
        return;
    }

   

    adminRegisterUserRequest();
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
        console.log(value)
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
    let selectTag = document.querySelector('#gender-input');
    let countrySelectTag = document.querySelector('#country-select-tag');

    let tablerow = document.getElementsByClassName('input-tag-select')
    let countryTableRow = document.getElementsByClassName('input-tag-country')

    console.log(tablerow)
    for(let item of Array.from(tablerow))
    {
        
        selectTag.removeChild(item)
    }
    for(let item of Array.from(countryTableRow))
    {
        
        countrySelectTag.removeChild(item)
    }
    for(let i = 0; i < items.length; i++)
    {
        
        CreateOptionTag(i + 1, items[i])
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


function CreateOptionTag(value , item)
{
    let selectTag = document.querySelector('#gender-input');
    selectTag.appendChild(InsertIntoOptionTag(item , value , "input-tag-select"))
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

function AddEnumToTable(obj)
{
    items = [];
    for(let i of obj)
    {
       

       items.push(i); 
    }
    loopItem();
}
function InsertIntoOptionTag( text , value, classname)
{
    let opt = document.createElement('option');
    opt.classList.add(classname);
    opt.innerText = text;
    opt.value = value;
    return opt;
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
getCountry();

