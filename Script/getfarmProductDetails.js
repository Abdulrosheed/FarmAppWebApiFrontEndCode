
var btnSearch = document.querySelector('#btn-submit');


Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
var item = function(name,grade,location, unitPrice,id)
{
    this.name = name;
    this.id = id;

    this.unitPrice = unitPrice;
    this.grade = grade;
 
    this.location = location;
  
}
let cartItemslocal = [];


let template = "";
let products = "";
let addToCartButton = document.getElementById('#btn-add-to-cart')
let divContainer = document.querySelector('#product-container-item')
function getAllFarmProducts()
{
    var id = window.location.href.split('=')[1];
    fetch("https://localhost:5001/api/FarmProduct/GetFarmProduct/" + id)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        
        console.log("processing")
        renderToPage(res.data)
        
    })


}

function renderToPage(product)
{
    let divTag = document.createElement('div')
    divTag.classList.add('col-lg-4')
    divTag.classList.add('col-md-4')
    let button = document.createElement('button');
    button.innerText = 'Add to cart';
    button.id = product.id;
    button.classList.add('btn');
    button.classList.add('btn-primary');
    let divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.style = "width : 18rem"
    let imgTag = document.createElement('img')
    imgTag.classList.add('card-img-top')
    imgTag.src = `https://localhost:5001/images/${product.productImage1}`
    let divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body') 
    divCardBody.id = 'card-container' 
    let productNameTag = CreateTag('card-title' ,  product.farmProduct);
    let productGrade = CreateTag('card-title' ,  product.grade)
    let productLocation = CreateTag('card-title' ,  product.state)
    let productPrice = CreateTag('card-title' ,  product.price);
    productNameTag.prepend(SecondCreateTag('Product Name : ' ))
    productGrade.prepend(SecondCreateTag('Grade : ' ))
    productLocation.prepend(SecondCreateTag('Location : ' ))
    productPrice.prepend(SecondCreateTag('Unit Price : ' ))
    divCardBody.appendChild(productNameTag)
    divCardBody.appendChild(productGrade)
    divCardBody.appendChild(productLocation)
    divCardBody.appendChild(productPrice)

    divCardBody.appendChild(button)
    divCard.appendChild(imgTag)
    divCard.appendChild(divCardBody)
   

  

    divTag.appendChild(divCard)
  
    divContainer.appendChild(divTag)
    console.log(divContainer)
    
   
    button.addEventListener('click' , function()
    {
        
        var itemCart = localStorage.getObj("cartItem")
        var companyToken = localStorage.getObj("company")
      console.log(itemCart)
      console.log(typeof itemCart)
      var found = false;
      for(var i = 0; i < itemCart.length; i++) {
          if (itemCart[i].id == product.id) 
          {
              found = true;
              break;
          }
      }
      if(!found && companyToken == null)
      {
        itemCart.push( new item(product.farmProduct , product.grade, product.state, product.price,product.id))
        localStorage.setObj("cartItem", itemCart)
      }
      if(companyToken != null)
      {
            AddCartToDb(product.id)
      }
        
        console.log(localStorage.getObj("cartItem"))
    })
}

function CreateTag(className , value)
{
    let tagH = document.createElement('h3')
    tagH.classList.add(className);
    tagH.innerText = value
    console.log(value)
    return tagH;
}
function SecondCreateTag(text)
{
    let tagSpan = document.createElement('span')
    tagSpan.innerText = text
    return tagSpan;
}
function AddCartToDb(id)
{
    var data = 
    {
        itemid : id,
        quantity : 1
    }
    var token = localStorage.getItem('company')
    fetch("https://localhost:5001/api/Cart/CreateCart" ,{
        method: 'POST',
        body: JSON.stringify(data),
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
        
    })

}
getAllFarmProducts()

