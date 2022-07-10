import React from "react";
import "./styles.css";
import { BsBagFill } from "react-icons/bs";

function Header(props){
    return(

    <header className="headerSection">
       <div className ="logoSection">
         <h4>Shopping Cart</h4>
       </div>
       <div className="iconSection">
           <span className="cartIcon">
            <BsBagFill onClick={props.toggleHandler}/>
            </span>
            <span className="cartCount">
               {props.count}
            </span>
       </div>
    </header>

    );
}

export default Header;