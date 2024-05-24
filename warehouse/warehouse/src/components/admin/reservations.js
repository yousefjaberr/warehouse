import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Reservations() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>Reservations</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>warehouse ID</td>
    <td>customer ID</td>
    <td>reserved space</td>
    <td>Reservations date</td>
    
  </tr>
  <tr>
    <td>1</td>
    <td>131</td>
    <td>3</td>
    <td>07/05/2024</td>
    
  </tr>
  <tr>
    <td>2</td>
    <td>132</td>
    <td>5</td>
    <td>11/11/2023</td>
    
  </tr>
  <tr>
  <td>102</td>
    <td>133</td>
    <td>8</td>
    <td>25/04/2024</td>
   
  </tr>
  <tr>
  <td>103</td>
    <td>134</td>
    <td>4</td>
    <td>01/03/2024</td>
  </tr>
</table>)}
    </div>
  )
}

export default Reservations