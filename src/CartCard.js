import React from "react";
import {Card, Button} from 'react-bootstrap';
import "./card.css";


function CartCard(props){

return(
<div className="boxSection"> 
<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.imageURL} style = {{height : '220px'}} />
  <Card.Body>
    <Card.Title>{props.tag.split(" ")[0]}</Card.Title>
    <Card.Text>
      Add to Cart and buy this T-shirt
    </Card.Text>
    <Card.Text>
      <label><mark><b>Price : Rs.{props.price}</b> </mark></label>
      <label><s>Rs.{props.discount}</s></label>
    </Card.Text>
    <Button variant="danger" onClick={props.removeHandler} id={props.id} >Remove</Button>
  </Card.Body>
</Card>
</div>
    );
}

export default CartCard;