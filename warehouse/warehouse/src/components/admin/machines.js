import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Machines() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>Machines</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>ID</td>
    <td>name</td>
    <td>price</td>
  </tr>
  <tr>
  <td>200</td>
    <td>truck</td>
    <td>200000</td>
    
  </tr>
  <tr>
  <td>201</td>
    <td>lift</td>
    <td>80000</td>
  </tr>
  <tr>
  <td>203</td>
    <td>truck</td>
    <td>200000</td>
  </tr>
</table>)}
    </div>
  )
}

export default Machines