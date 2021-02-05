import React from "react";
import '../../App.css';

const Address =() => {
    
    var obj =[{pays:"Tunis" ,
     state :"Kasserine" ,
    city : "Haidra " }]

    return (
        <div  >
        {
        obj.map((el)=>( 
<div className="hello" >
           
    pays:   { el.pays} 
    <br/>
    state:   { el.state} 
    <br/>
  
    city:    {el.city}
  
  
   
  
 
  
  </div>      
          
            ))
        }

      </div>
    );
};
export default Address ;