import React, {useState} from "react";
import Header from "./Header";
import Container from "./Container";
import ContainerCart from "./ContainerCart";

function App() {
 
  const [showCart,togglecart] = useState(0)
  const [currentCount, insertCart] = useState(()=>{
    let items = sessionStorage.getItem("items");
    if(items){
      let itemsArray = [];
      if(items.indexOf(",") > -1){
        itemsArray = items.split(",")
        console.log(itemsArray)
        return itemsArray.length;
      }else{
        return 1;
      }
    }else{
      return 0;
    }
  })

  function incrementCart(e){

    let id = [parseInt(e.target.id)];

    
    let items = sessionStorage.getItem("items");
    if(!items){
      items = new Array(id);
      sessionStorage.setItem("items",items);
      insertCart( prev => prev + 1);
    }else{
      items = new Array(items)
      
      if(items.indexOf(parseInt(e.target.id)) > -1){
        alert("item is already present")
      }else{
        items.push(id)
      
      sessionStorage.setItem("items",items)
      insertCart( prev => prev + 1);
      }
    }
  }

  function decrementCart(){
    insertCart( prev => prev - 1);
  }

  function toggeler(){
     togglecart(!showCart)  
  }
  return (

  <div>
    <Header count = {currentCount} toggleHandler ={toggeler}/>
    {
    showCart ? 
    (
    <div>
      <h4 style={{textAlign:'center', marginTop : 10}}>Your cart items:</h4>
      <ContainerCart decrement = {decrementCart}/>
    </div> 
    )
    :
    (
    <div> 
      <h4 style={{textAlign:'center', marginTop : 10}}>Our items</h4>
    <Container handler = {incrementCart} />
    </div>
    )
    }
   
  </div>
   
  );
}

export default App;
