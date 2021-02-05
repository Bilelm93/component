import { getByTestId } from "@testing-library/react";
import React from "react";

const FullName =() => {
    
    var first = "Bilel";
    var last = "Marrouchi";
    return (<h1 style={{color:'white' , border:'1px solid white' , width:'80%' , padding:20 , marginTop:20}}  >My name is {first} {last} </h1>);
};
export default FullName ;