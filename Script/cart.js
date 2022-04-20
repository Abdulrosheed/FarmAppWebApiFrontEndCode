
// let quantityFields = document.getElementsByClassName('num')
// let inputButtonPlaceOrder = document.getElementById('btn-order-place')

// Storage.prototype.setObj = function (key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function (key) {
//     return JSON.parse(this.getItem(key))
// }
// function getElementFromLocalStorage() 
// {
//     var items = localStorage.getObj("cartItem");
//     var companyToken = localStorage.getObj("cartItem");
//     if(companyToken == null)
//     {
//         loopItemFromLocalStorage(items)
//     }
//     else
//     {
//         getElementFromDb()
//     }
    

// }
// function getElementFromDb()
// {
//     var token = localStorage.getItem("company")
//     console.log(token)
//     fetch("https://localhost:5001/api/Cart/GetCartByCompanyId/" , {
//         headers : {
//             "Authorization" : 'Bearer ' + token,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(function(response)
//     {
//         return response.json()
//     })
//     .then(function(value)
//     {
//         if(value.isSucess)
//         {
//             console.log(value)
//             console.log(value.data.farmProductsCarts)
          
//             loopItemFromLocalStorage(value.data.farmProductsCarts)
//         }
//         else
//         {
//             alert("No item has been added to cart")
//         }
    
        
//     })
// }
// function loopItemFromLocalStorage(itemsRetrieved) {
    
  
//     var container1 = document.getElementById("body-container-price")
//     container1.innerHTML = ""



//     itemsRetrieved.forEach(item => {
//         console.log("processing2")
//         console.log(item)
//         renderToPage(item)

//     })
// }
// function renderToPage(product) {
//     var tableItem = document.getElementById("real-table")
//     var grandTotalPriceContainer = document.getElementById("grand-total-controller")
//     console.log(grandTotalPriceContainer)
//     console.log(tableItem)
//     var x = tableItem.children[2]
//     x.removeChild(grandTotalPriceContainer)


//     var container = document.createElement('tr')
//     container.id ="row-item-container-inner"
//     var cartContainer = document.getElementsByTagName('tbody')[0]
//     // var table = document.getElementById("real-table")
//     var inputTdTag = createTdTag("input-td-tag")
//     inputTdTag.classList.add('items-on-list')
//     var inputCheckbox = createInputTag("uk-checkbox", "checkbox")
//     inputTdTag.appendChild(inputCheckbox);
//     container.appendChild(inputTdTag)
//     var inputImgTdTag = createTdTag("input-td-tag")
//     inputImgTdTag.classList.add('items-on-list')
//     var inputImg = createImgTag("uk-preserve-width", "40", `https://localhost:5001/images/${product.image}`)
//     inputImg.classList.add('uk-border-circle')
//     inputImgTdTag.appendChild(inputImg)
//     container.appendChild(inputImgTdTag)

//     var itemNameTdTag = createTdTag("uk-table-link")
//     itemNameTdTag.classList.add('items-on-list')
//     var itemNameHTag = CreateHTag("item-name", product.farmProduct)
//     itemNameTdTag.appendChild(itemNameHTag);
//     container.appendChild(itemNameTdTag)


//     var itemPriceTdTag = createTdTag("uk-text-truncate")
//     itemPriceTdTag.classList.add('items-on-list')
//     // itemPriceHTag.classList.add('items-on-list')
//     var itemPriceHTag = CreateHTag("img-uy-j", product.price)
//     itemPriceTdTag.classList.add('item-price')
//     itemPriceTdTag.appendChild(itemPriceHTag)
//     container.appendChild(itemPriceTdTag)
//     var itemGradeTdTag = createTdTag("uk-text-truncate")
//     itemGradeTdTag.classList.add('items-on-list')
//     var itemGradeHTag = CreateHTag("img-uy-j", product.grade)
//     itemGradeTdTag.classList.add('item-price')
//     itemGradeTdTag.appendChild(itemGradeHTag)
//     container.appendChild(itemGradeTdTag)
//     var itemStateTdTag = createTdTag("uk-text-truncate")
//     itemStateTdTag.classList.add('items-on-list')
//     var itemStateHTag = CreateHTag("img-uy-j", product.state)
//     itemStateTdTag.classList.add('item-price')
//     itemStateTdTag.appendChild(itemStateHTag)
//     container.appendChild(itemStateTdTag)
//     var itemQuantity = createTdTag("img-uy-j")
//     itemQuantity.classList.add('items-on-list')
//     var inputItemQuantity = createInputTag("num", "number")
//     inputItemQuantity.id = 'item-quantity-display'
//     inputItemQuantity.classList.add('input-quantity')
//     inputItemQuantity.value = product.quantity
//     itemQuantity.appendChild(inputItemQuantity)
//     container.appendChild(itemQuantity)

//     var totalPriceTdTag = createTdTag("uk-text-truncate")
//     totalPriceTdTag.classList.add('items-on-list')
//     totalPriceTdTag.classList.add('total-price')


//     container.appendChild(totalPriceTdTag)
//     var totalPriceHTag = CreateHTag("vuye-ydfvc", '0')
//     totalPriceHTag.id = 'total-price-column'
//     totalPriceHTag.id = 'price-tag-id'
//     totalPriceHTag.classList.add('items-cart-list')
//     totalPriceHTag.innerText = product.quantity * product.price
//     totalPriceTdTag.appendChild(totalPriceHTag)

//     var removeBtnTd = createTdTag("btn-remove");
  
//     var removeBtn = document.createElement('button');
//     removeBtn.classList.add('uk-button');
//     removeBtn.classList.add('uk-button-danger')
   
//     removeBtn.id = 'remove-item';
//     removeBtn.type = 'button';
//     removeBtn.innerText = 'Remove';
//     removeBtnTd.appendChild(removeBtn);
//     container.appendChild(removeBtnTd);
//     console.log('prrr')
//     console.log(removeBtnTd.parentElement)




//     removeBtn.addEventListener('click', function (event) 
//     {
//         var token = localStorage.getItem("company")
//         if(token == null)
//         {
//             removeItemFromLocalStorage(product , event)
//         }
//         else
//         {
//             RemoveItemFromDb(product.id)
//         }
        
//    })

//     inputItemQuantity.addEventListener('input', function (event) {
//         console.log('processing4')
//         console.log(event.target.value)
//         var totalPrice = event.target.value * product.price
//         console.log(totalPrice)
//         console.log(inputItemQuantity.value)

//         var outerParent = event.target.parentElement.parentElement
//         var innerParent = outerParent.children[7]
//         innerParent.childNodes[0].innerText = totalPrice
//         var TotalPriceTag = document.getElementById('price-tag-id')
//         var grandTotalPrice = document.getElementById('grand-total-price-value')
//         var grandTotalPriceHolder = document.getElementsByClassName('items-cart-list')
//         // var grandTotalPrice = document.querySelector('#grand-total-controller')
//         var y = grandTotalPriceContainer.children[5]
//         console.log(y)
//         console.log(grandTotalPriceContainer)
//         var j = y.children[0]

//         let total = 0;
//         for (let item of Array.from(grandTotalPriceHolder)) {
//             console.log('vyufgfkj')
//             total += parseInt(item.innerText)
//         }
//         console.log(total)
//         j.children[0].innerText = "$" + total

//     })
//     inputItemQuantity.onblur = function(event)
//     {
//         console.log(event.target.value)
//         console.log(product.id)
//         UpdateItemCartInDb(product.id , event.target.value)
//     }




//     cartContainer.appendChild(container)


//     x.appendChild(grandTotalPriceContainer)




// }

// function createTdTag(className) {
//     let tdTag = document.createElement('td');
//     tdTag.classList.add(className);
//     return tdTag;
// }
// function createInputTag(className, type) {
//     let inputTag = document.createElement('input');
//     inputTag.classList.add(className);
//     inputTag.type = type;
//     return inputTag;
// }
// function createImgTag(className, width, source) {
//     var imgTag = document.createElement('img')
//     imgTag.src = source;
//     imgTag.classList.add(className);
//     imgTag.width = width
//     return imgTag;
// }
// function CreateHTag(className, value) {
//     let tagH = document.createElement('h3')
//     tagH.classList.add(className);
//     tagH.innerText = value
//     console.log(value)
//     return tagH;
// }

// function removeItemFromLocalStorage(item,event)
// {
//     var itemCartReload = localStorage.getObj("cartItem")
//     let itemses = itemCartReload.filter(i => i.id != item.id);
//     localStorage.setObj("cartItem" , itemses)
//     var items = localStorage.getObj("cartItem")
//     del_btn = event.target
//     del_btn_parent = del_btn.parentElement.parentElement
//     del_btn_parent.remove()
//     console.log(del_btn)
//     loopItemFromLocalStorage(items)
// }
// function UpdateItemCartInDb(itemId , quantity)
// {
//     var token = localStorage.getItem("company")
//     let data = 
//     {
//         itemId : itemId,
//         quantity : quantity
//     }
//     console.log(data)
//     console.log(token)
//     fetch("https://localhost:5001/api/Cart/UpdateCartItem" ,{
//         method: 'PUT',
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
      
        
//     })
// }
// function RemoveItemFromDb(productId)
// {
//     var token = localStorage.getItem("company")
//     let data = 
//     {
//         itemId : productId,
        
//     }
//     console.log(token)
//     console.log(data)
//     fetch("https://localhost:5001/api/Cart/UpdateCart" ,{
//         method: 'PUT',
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
//         getElementFromDb();
        
//     }) 
// }
// function PlaceRequest()
// {
//     var token = localStorage.getItem("company")
//     console.log(token)
//     fetch("https://localhost:5001/api/Order/PlaceRequest" ,{
       
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
//         console.log(value)
//         alert(value.message)
        
//     })
// }
// inputButtonPlaceOrder.addEventListener('click' , function()
// {
//     PlaceRequest()
// })
// getElementFromLocalStorage()