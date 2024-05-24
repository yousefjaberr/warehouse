import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Financial() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>Financial reports</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>reportID</td>
    <td>revenue</td>
    <td>expensess</td>
    <td>profit</td>
    <td>report date</td>

  </tr>
  <tr>
    <td>400</td>
    <td>3000</td>
    <td>500</td>
    <td>2500</td>
    <td>11/11/2023</td>

    
  </tr>
  <tr>
    <td>401</td>
    <td>8000</td>
    <td>2000</td>
    <td>6000</td>
    <td>11/11/2023</td>
    
  </tr>
  <tr>
  <td>402</td>
    <td>5000</td>
    <td>1500</td>
    <td>3500</td>
    <td>25/04/2024</td>
   
  </tr>
  <tr>
  <td>403</td>
    <td>4000</td>
    <td>800</td>
    <td>3200</td>
    <td>01/03/2024</td>
  </tr>
</table>)}
    </div>
  )
}

export default Financial