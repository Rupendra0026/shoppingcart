import React from "react";
import {Card, Button} from 'react-bootstrap';
import "./card.css";


function CustomCard(props){

return(
<div className="boxSection"> 
<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.imageURL} style = {{height : '220px'}} />
  <Card.Body>
    <Card.Title>{props.tag}</Card.Title>
    <Card.Text>
      Add to Cart and buy this T-shirt
    </Card.Text>
    <Card.Text>
      <label><mark><b>Price : Rs.{props.price}</b> </mark></label>
      <label><s>Rs.{props.discount}</s></label>
    </Card.Text>
    <Button variant="primary" onClick={props.clickHandler} id={props.id} >Add to cart</Button>
  </Card.Body>
</Card>
</div>
    );
}

export default CustomCard;