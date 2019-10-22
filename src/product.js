const PRODUCTS_URL = "http://localhost:3000/api/v1/products"



class Product {
	constructor(product){
		this.id = product.id;
		this.name = product.name;
		this.description = product.description;
		this.price = product.price;
		this.image = product.image;
		this.stock = product.stock
	}

	static getProducts(){
		fetch(PRODUCTS_URL)
		.then(res => res.json())
		.then(productsArr => {
			productsArr.forEach(product => {
				
				let p = new Product(product)
				p.renderProducts()

			})
		})
	}
   

  renderProducts(){
  	console.log("rendering products")
  	let main = document.querySelector('main')

  	let article = document.createElement('article')
  	//add class change to article
  	article.classList.add('main')

  	article.dataset.id = this.id

    

  	let h3 = document.createElement('h3')
  	h3.innerText = this.name

  	let imgEl = document.createElement('img')
  	imgEl.src = this.image


  	let desc = document.createElement('p')
  	desc.innerText = this.description

  	let price = document.createElement('p')
  	price.innerText = `Price: ${this.price}`

  	let stock = document.createElement('p')
  	stock.innerText = `Stock: ${this.stock}`



  	main.appendChild(article)
    
  	article.appendChild(h3)
  	article.appendChild(imgEl)
  	article.appendChild(desc)
  	article.appendChild(price)
  	article.appendChild(stock)
  }




}