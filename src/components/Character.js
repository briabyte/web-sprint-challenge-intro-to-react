// Write your Character component here

import React,{useState, useEffect } from "react";
 import axios from "axios";
 import Char from "./Char";
 import styled from "styled-components";

 const Card = styled.div`
     display:flex;


 `;

 const Character = ({name, dob, gender, mass,skin_color,height,hair_color}) =>{


     if(!name) return <h2>Loading...</h2>;
     return (
         <Char name={name} dob={dob} gender={gender} 
         mass={mass} skin_color={skin_color} height={height} hair_color={hair_color}
         />
     );
 };


 export default Character; 