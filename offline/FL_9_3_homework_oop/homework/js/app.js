function ShoppingCart({name, owner, maxSize}) {
    this.name = name;
    this.owner = owner;
    this.maxSize = maxSize;
    this.productsArr = [];
    
    let _logs = [];
    _logs.push(`${this.name} was created in ${new Date()}`);

    this.addNewProduct = function(product) {
        if (!(product instanceof Product)) {
            
            return console.log(`Please try to add product instance`);
        }
        let addedProdDate = new Date();
        product.date = addedProdDate.toString();
        if (this.productsArr.length < maxSize) {
            this.productsArr.push(product);
        } else {
            let min = this.productsArr[0];
            for (let i = 0; i < this.productsArr.length; i++) {
                if (min.price > this.productsArr[i].price) {
                    min = this.productsArr[i];
                }
            }
            this.removeProduct(min);
            this.productsArr.push(product);
        }
        product.add(this.name);
        _logs.push(`${product.name} was added to ${this.name} on ${new Date()}`);
        
        return this;
    }

    this.removeProduct = function(product) {
        product.removeProduct(this.name);
        let id = this.productsArr.indexOf(product);
        this.productsArr.splice(id, 1);
        _logs.push(`${product.name} was removed to ${this.name} on ${new Date()}`);
        
        return this;
    }

    this.getAvaragePrice = function() {
        let total = this.getTotalPrice();
        
        return +(total/this.productsArr.length).toFixed(2);
    }
    
    this.getProducts = function() {
        
        return this.productsArr;
    }

    this.getFormattedListOfProducts = function() {
        let listOfProducts = [];
        let productDscrp = [];
        for (let i = 0; i < this.productsArr.length; i++) {
            productDscrp.push(Object.entries(this.productsArr[i].description).join(' ; ').split(',').join(' : '));
        }
        for (let i = 0; i < this.productsArr.length; i++) {
            listOfProducts.push(`${this.productsArr[i].name} - is on ${this.name} from ${this.productsArr[i].date}. 
            Detailed product description: ${productDscrp[i]}`);
        }
        
        return listOfProducts;
    }

    this.getTotalPrice = function() {
        let totalPrice = 0;
        this.productsArr.forEach(function(el){
            totalPrice += el.price
        })
        
        return +totalPrice.toFixed(2);
    }

    this.getHistory = function() {
        
        return _logs;
    }
}

function Product({name, description, price}) {
    this.name = name;
    this.description = description;
    this.price = price;
    
    let _logs = [];
    let cardIn = '';

    this.setPrice = function(newPrice) {
        if (newPrice <= this.price) {
            _logs.push(`Failed attempt to cahange price from ${this.price} to ${newPrice}`);
        } else {
            _logs.push(`Price is change from ${this.price} to ${newPrice}`);
            this.price = newPrice;
        }
        
        return this;
    }

    this.getPrice = function() {
        
        return this.price;
    }

    this.add = function(cardName) {
        cardIn = cardName;
        _logs.push(`${this.name} is added to ${cardIn} on ${new Date()}`);
        
        return this;
    }

    this.removeProduct = function(cardName) {
        cardIn = '';
        _logs.push(`${this.name} is removed from ${cardName} on ${new Date()}`);
        
        return this;
    }

    this.getHistory = function() {
        
        return _logs;
    }
}

// All products:
const apple = new Product({
    name: 'apple',
    description: {
      color: 'red',
      size: 'small'
    },
    price: 30
});

const banana = new Product({
    name: 'banana',
    description: {
      color: 'yellow',
      size: 'medium'
    },
    price: 45
});

const orange = new Product({
    name: 'orange',
    description: {
      color: 'orange',
      size: 'medium'
    },
    price: 60
});

const watermelon = new Product({
    name: 'watermalon',
    description: {
      color: 'green',
      size: 'large'
    },
    price: 80
});

const cherry = new Product({
    name: 'cherry',
    description: {
      color: 'red',
      size: 'small'
    },
    price: 100
});

// ShoppingCarts:
const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxSize: 5
});

const vladShopCart = new ShoppingCart({
    name: 'vladCart',
    owner: 'Vlad',
    maxSize: 3
});

stevesShopCart
    .addNewProduct(apple)
    .addNewProduct(cherry)
    .addNewProduct(orange)              
    .addNewProduct(watermelon)          
    .addNewProduct(banana) /*Apple will be deleted from stevesShopCart */
    .addNewProduct(orange); /*because it have the lowest price and steves-max-products = 5 */
stevesShopCart
    .removeProduct(watermelon)
    .removeProduct(banana);

console.log(stevesShopCart.getProducts()); /*Array of products*/
      
cherry
    .setPrice(15) /*failed to change price*/
    .setPrice(150); /*price is changed*/
console.log(cherry.getPrice());

console.table(stevesShopCart.getFormattedListOfProducts()); /*table with formatted products*/
console.log(stevesShopCart.getHistory()); /*array with all action in the cart*/ 

console.log('avarage price:', stevesShopCart.getAvaragePrice());   
console.log('total price:', stevesShopCart.getTotalPrice());  

console.log(cherry.getHistory());

vladShopCart
    .addNewProduct(banana)
    .addNewProduct(watermelon);

console.log(vladShopCart.getProducts());
console.log(vladShopCart.getHistory());
console.log(watermelon.getHistory());