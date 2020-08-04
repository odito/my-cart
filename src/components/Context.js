import React, { Component } from 'react';
import {Data} from './Data';


const ProductContext = React.createContext();

// provider :provides all the data and generally give us access to data from context

// consumer which as word say consumes the data fro contxt







 class ProductProvider extends Component {


state={


    navOpen:false,
    cartOpen:false,
    data:Data,
    cart:[],
    total:0,
    shipping:10

}

// for open close

handleNav=()=>{
   

  if(this.state.cartOpen===true){
     
    this.setState({
        cartOpen:false
    })
  }


    this.setState({
        navOpen:!this.state.navOpen
    })
}


// for open close cart
handleCartNav=()=>{
    if(this.state.navOpen===true){
      this.setState({
          navOpen:false
      })
    }

    this.setState({
        cartOpen:!this.state.cartOpen
    })
}





// if cart is open we want to be closed
closeNavCart=()=>{
    if(this.state.navOpen===true  || this.state.cartOpen===true){
        this.setState({
            navOpen:false,
            cartOpen:false
        })
    }
}


// add to cart functionality
addToCart=(id)=>{

console.log(`item ${id} added to cart`);

const {data,cart}=this.state;

let check=this.state.cart.find(item=>item.id===id);

if(!check){


    const filterData=data.filter(item=>{
        return item.id===id
    })

//  for each in order to change the situation of cart items
filterData.forEach(item=>{
    item.isInCart=true

})
  
    this.setState({
        cart:[...this.state.cart, ...filterData],
        cartOpen:true,
     },()=>{
         this.totalItems();
     })
}

else{
 
}


}



// delete single items
deleteItem=(id)=>{

const {cart}=this.state;
cart.forEach((item, index)=>{
    if(item.id===id){
        cart.splice(index,1)
    }

    item.isInCart=false
})


this.setState({
    cart:cart
})

}

// increase

increaseItem=(id)=>{
 const {cart}=this.state;
 cart.forEach(item=>{
     if(item.id===id){
       item.count +=1;
     }
 })

 this.setState({
     cart:cart
 },()=>{
     this.totalItems();
 })
}


// decrease item
decreaseItem=(id)=>{
 const {cart}=this.state;
 
 cart.forEach(item=>{
     if(item.id===id){
         item.count===1?item.count=1:item.count -=1;

     }

     this.setState({
         cart:cart
     },()=>{
         this.totalItems();
     })
 })
}


// get total items in cart
totalItems=()=>{
const {cart}=this.state;

const cartTotal= cart.reduce((prev,item)=>{
    return prev + (item.price*item.count)
},0)

this.setState({
    total:cartTotal
})


}




componentDidUpdate(){
    localStorage.setItem('dataCart',JSON.stringify(this.state.cart));
    localStorage.setItem('totalCart',JSON.stringify(this.state.total));
}




componentDidMount(){
    this.totalItems();

    // localstorage
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));

    if(dataCart !==null){
      this.setState({
          cart:dataCart
      })
    }

    const totalCart = JSON.parse(localStorage.getItem('totalCart'));

    if(totalCart !==null){
      this.setState({
          total:totalCart
      })
    }
}





    render() {
        return (
           <ProductContext.Provider value={{
             
            ...this.state,
            handleNav:this.handleNav,
            closeNavCart:this.closeNavCart,
            handleCartNav:this.handleCartNav,
            addToCart:this.addToCart,
            deleteItem:this.deleteItem,
            increaseItem:this.increaseItem,
            decreaseItem:this.decreaseItem



           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer}
