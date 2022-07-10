import React, { useState } from "react";
import "./container.css"
import Allcards  from "./json";
import CartCard from "./CartCard";



function ContainerCart(props){

   const [carts, removeCart] = useState(()=>{
    let items = sessionStorage.getItem("items")
    let itemsArray = [];
    if(items){
    if(items.indexOf(",") > -1){
      itemsArray = items.split(",")
    }
    else{
      itemsArray = [items]
    }
  }
    let filterCards = [];
    itemsArray = itemsArray.map(item => parseInt(item))
    for(let item of itemsArray){
      for(let card of Allcards){
        if(item === card.id){
           filterCards.push(card)
        }
      }
    }
   
    return filterCards;
   })
  
  
   function removeItem(e){
    let id = parseInt(e.target.id);
     removeCart((prev) =>  prev.filter((curr, index) => curr.id !== id));
     props.decrement()
    let sessionItems = sessionStorage.getItem("items");
    let newSession = [];
    if(sessionItems){
      if(sessionItems.indexOf(",") > -1){
        newSession = sessionItems.split(",")
      }
      else{
        newSession = [sessionItems]
      }
    }
    newSession = newSession.map(item => parseInt(item))
    newSession = newSession.filter(item => item !== id)
    sessionStorage.setItem("items",newSession)
   }
   
    
  return(
    <div className="containerSection">
        {carts.map(item => <CartCard key={item.id} id={item.id} imageURL = {item.previewURL} price ={item.likes} discount = {item.collections} tag={item.tags} removeHandler ={removeItem} />)}
    </div>
  );
}

export default ContainerCart;

