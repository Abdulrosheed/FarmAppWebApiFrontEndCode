const loginInputEmail = document.querySelector('#email-input-login');
const loginInputPassWord = document.querySelector('#pass-word-input-login');
let spanErrorMessage = document.querySelector('#error-message');
const loginInputSubmitBtn = document.querySelector('#btn-submit');
console.log(loginInputSubmitBtn)



const loginUserRequest = () => {
    let data = 
    {
        email : loginInputEmail.value,
        password : loginInputPassWord.value,

    }
    console.log(data);
    fetch('https://localhost:5001/api/User/Login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        }
    })
        .then(response => response.json())
        .then(data => {
          
           
            if(data.isSucess )
            {
                 
           setToken(data.token)
           console.log(data)
           console.log(data.data.name)
                for(let i  = 0; i < data.data.roles.length; i++)
                {
                    if(data.data.roles[i].name == "Admin")
                    {
                        setAdminToken(data.token)
                        window.location.href = `/Html/adminDashboard.html?id=${data.data.name}`

                    }
                    if(data.data.roles[i].name == "Company")
                    {
                        setCompanyToken(data.token);
                        window.location.href = `/Html/companyDashboard.html?id=${data.data.name}`
                       
                    }
                    if(data.data.roles[i].name == "FarmInspector")
                    {
                        setFarmInspectorToken(data.token);
                        window.location.href = `/Html/farmInspectorDashboard.html?id=${data.data.name}`
                    }
                    if(data.data.roles[i].name == "Farmer")
                    {
                        setFarmerToken(data.token);
                        window.location.href = `/Html/farmerDashboard.html?id=${data.data.name}`
                    }
                }
                alert(data.message)
            }
            else
            {
                alert(data.message)
            }
           
            
        })
        .catch(error => console.error(error));
}
const validateInputs = (passwordInput,emailInput) => {
    return  passwordInput.value.trim() == "" || emailInput.value.trim() == "" 
}


const setAdminToken = token => {
    localStorage.setItem('admin', token);
    console.log(token)
}
const setToken = token => {
    localStorage.setItem('token', token);
    console.log(token)
}
const setCompanyToken = token => {
    localStorage.setItem('company', token);
    console.log(token)
}
const setFarmInspectorToken = token => {
    localStorage.setItem('farmInspector', token);
    console.log(token)
}
const setFarmerToken = token => {
    localStorage.setItem('farmer', token);
    console.log(token)
}
loginInputSubmitBtn.addEventListener('click', function(e)  
{
        e.preventDefault()
    if (validateInputs(loginInputPassWord, loginInputPassWord)) {
            spanErrorMessage.innerText = "Please enter a valid username or password";
            spanErrorMessage.classList.remove('hidden');
            return;
        }
    
     
    
        loginUserRequest();
        
})
