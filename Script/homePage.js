// var rawResponse = 'PNG'; // This is your response object


// var img = new Image();
// var container = document.getElementById('newImg');

// img.src = ;
// . then(res=>{return res.blob()})
//   .then(blob=>{
//     var img = URL.createObjectURL(blob);
//     // Do whatever with the img
//     document.getElementById('img').setAttribute('src', img);
//   })

// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// }
// var item = function(farmProduct,grade,state, price,id , image)
// {
//     this.farmProduct = farmProduct;
//     this.id = id;

//     this.price = price;
//     this.grade = grade;
 
//     this.state = state;
//     this.image = image
  
// }
// let cartItemslocal = [];


// let template = "";
// let products = "";
// let addToCartButton = document.getElementById('#btn-add-to-cart')
// let divContainer = document.querySelector('#product-container-item')
// function fetchProductTemplate()
// {
//     fetch('../Templates/product.txt')
//     .then(res => res.text())
//     .then(res => template = res);


// }
// function fetchProductForHomePage()
// {
//      fetch('https://localhost:5001/api/FarmProduct/GetAllFarmProductsForHomePage')
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         products = [...res]
//         console.log("processing")
//         renderProduct(products)
        
//     })
// }
// function renderProduct(products)
// {
//     products.forEach(product => {
//        console.log("processing2") 
//        console.log(product) 
//      renderToPage(product)
           
//     })

// }
// function renderToPage(product)
// {
//     let divTag = document.createElement('div')
//     divTag.classList.add('col-lg-4')
//     divTag.classList.add('col-md-4')
//     let button = document.createElement('button');
//     button.innerText = 'Add to cart';
//     button.id = product.id;
//     button.classList.add('btn');
//     button.classList.add('btn-primary');
//     let divCard = document.createElement('div')
//     divCard.classList.add('card')
//     divCard.style = "width : 18rem"
//     let imgTag = document.createElement('img')
//     imgTag.classList.add('card-img-top')
    
//     imgTag.src = `https://localhost:5001/images/${product.productImage1}`
//     let divCardBody = document.createElement('div')
//     divCardBody.classList.add('card-body') 
//     divCardBody.id = 'card-container' 
//     let productNameTag = CreateTag('card-title' ,  product.farmProduct);
//     let productGrade = CreateTag('card-title' ,  product.grade)
//     let productLocation = CreateTag('card-title' ,  product.state)
//     let productPrice = CreateTag('card-title' ,  product.price);
//     productNameTag.prepend(SecondCreateTag('Product Name : ' ))
//     productGrade.prepend(SecondCreateTag('Grade : ' ))
//     productLocation.prepend(SecondCreateTag('Location : ' ))
//     productPrice.prepend(SecondCreateTag('Unit Price : ' ))
//     divCardBody.appendChild(productNameTag)
//     divCardBody.appendChild(productGrade)
//     divCardBody.appendChild(productLocation)
//     divCardBody.appendChild(productPrice)

//     divCardBody.appendChild(button)
//     divCard.appendChild(imgTag)
//     divCard.appendChild(divCardBody)
   

  

//     divTag.appendChild(divCard)
  
//     divContainer.appendChild(divTag)
//     console.log(divContainer)
    
   
//     button.addEventListener('click' , function()
//     {
//         var companyToken = localStorage.getItem("company")
        
//         var itemCart = localStorage.getItem("cartItem")
       
//     //   console.log(itemCart)
//     //   console.log(typeof itemCart)
//       var found = false;
//       for(var i = 0; i < itemCart.length; i++) {
//           if (itemCart[i].id == product.id) 
//           {
//               found = true;
//               break;
//           }
//       }
//       if(!found && companyToken == null)
//       {
//         itemCart.push( new item(product.farmProduct , product.grade, product.state, product.price,product.id , product.productImage1))
//         localStorage.setObj("cartItem", itemCart)
//       }
//       if(companyToken != null)
//       {
//           console.log("processing")
//             AddCartToDb(product.id)
//       }
        
//         console.log(localStorage.getObj("cartItem"))
//     })
// }

// function CreateTag(className , value)
// {
//     let tagH = document.createElement('h3')
//     tagH.classList.add(className);
//     tagH.innerText = value
//     console.log(value)
//     return tagH;
// }
// function SecondCreateTag(text)
// {
//     let tagSpan = document.createElement('span')
//     tagSpan.innerText = text
//     return tagSpan;
// }
// function AddCartToDb(id)
// {
//     var data = 
//     {
//         itemid : id,
//         quantity : 1
//     }
//     var token = localStorage.getItem('company')
//     fetch("https://localhost:5001/api/Cart/CreateCart" ,{
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers : {
//             "Authorization" : 'Bearer ' + token,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(function(response)
//     {
//         return response.json()
//     }).then(function(value)
//     {
//         console.log(value);
        
//     })

// }
// fetchProductTemplate()
// fetchProductForHomePage()