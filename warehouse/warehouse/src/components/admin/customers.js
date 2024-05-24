import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Customers() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>Customers</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>ID</td>
    <td>name</td>
    <td>Email</td>
    <td>phone number</td>
    <td>reserved space</td>
    <td>payment amount</td>
  </tr>
  <tr>
   <td>131</td>
    <td>yousef</td>
    <td>yousef@gmail.com</td>
    <td>0598878875</td>
    <td>3</td>
    <td>3000$</td>
    
  </tr>
  <tr>
  <td>132</td>
    <td>yaseen</td>
    <td>yaseen@gmail.com</td>
    <td>0598878445</td>
    <td>5</td>
    <td>5000$</td>
  </tr>
  <tr>
  <td>133</td>
    <td>yazan</td>
    <td>yazan@gmail.com</td>
    <td>0569878875</td>
    <td>8</td>
    <td>8000$</td>
  </tr>
  <tr>
  <td>134</td>
    <td>ahmad</td>
    <td>ahmad@gmail.com</td>
    <td>0594652375</td>
    <td>4</td>
    <td>4000$</td>
  </tr>
</table>
)}
    </div>
  )
}

export default Customers