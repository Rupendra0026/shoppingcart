import React from "react";
//import React,{useState, useEffect} from "react";
import "./container.css"
import cards from "./json"
//import instance from "./axios";
import CustomCard from "./CustomCard";



function Container(props){
    
  /*
  const[cardsResponse, setCards] = useState(()=>cards) 
    
  useEffect(() => {
   async function getData(){
   await Promise.all([
  
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=computer&image_type=photo&safesearch=true&editors_choice=true')
    
   ]).then(
     res => {
       let tempArray = []
       for(let datachunk of res){
           tempArray = [...tempArray, ...datachunk.data.hits]
       }
       setCards(prevCards => [...prevCards,...tempArray])
     } 
   )
   }
   getData()
  },[])
*/


  return(
    <div className="containerSection">
        {cards.map(item => <CustomCard key={item.id} id={item.id} imageURL = {item.previewURL} price ={item.likes} discount = {item.collections} tag={item.tags} clickHandler ={props.handler}/>)}
    </div>
  );
}

export default Container;