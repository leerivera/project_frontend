 const formBtn = document.querySelector('#usrform')
 document.addEventListener('DOMContentLoaded', init)

  function init(){
     
      Product.getProducts()
      Cart.getCarts()
  }

  formBtn.addEventListener('submit', addProduct)


  function addProduct(e)	{
  	e.preventDefault()
  	console.log('we are adding products')

  	let name = document.getElementById('name').value
  	let image = document.getElementById('fileupload').value
  	let description = document.getElementById('content').value
    let price = document.getElementById('price').value
  	let stock = document.getElementById('stock').value

  	postFetch(name, image, description, price, stock)
  }


  function postFetch(name, image, description, price, stock){
    let data = {
      name: name,
      image: image,
      description: description,
      price: price,
      stock: stock
    }
    fetch('http://localhost:3000/api/v1/products', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
     .then(res => res.json())
     .then(data => {
      renderProducts(data)
     })


















  }