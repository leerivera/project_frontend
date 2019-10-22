const CARTS_URL = "http://localhost:3000/api/v1/carts"

class Cart {
	constructor(cart){
		this.id = cart.id;
		this.user = cart.user;
		this.product = cart.product;
		this.productId = cart.product_id;
		this.userId = cart.user_id;
	}

	static getCarts() {
	   fetch(CARTS_URL)
	   .then(res => res.json())
	   .then(cartsArr => {
	   		cartsArr.forEach(cart =>{
	   			let c = new Cart(cart)

	   			console.log(c)

	   			c.renderCarts()
	   			
	   		})
	   })
	}

	   renderCarts(){
	   	console.log('rendering carts')

	   	let main = document.querySelector('main')

	    let aside = document.createElement('aside')

	    aside.classList.add('aside-1')

	    

	  
	    
	    

        let h3 = document.createElement('h3')
        h3.innerText = this.user.name

        let img = document.createElement('img')
        img.classList.add('image1')
        img.src = this.product.image

        let h2 = document.createElement('h2')
        h2.innerText = this.product.name

        let h4 = document.createElement('h4')
        h4.innerText = `Price ${this.product.price}`


	   	main.appendChild(aside)
	   	aside.appendChild(h3)
	   	aside.appendChild(img)
	   	aside.appendChild(h2)
	   	aside.appendChild(h4)
	   	
	   }
	}


   

	   
	

 







