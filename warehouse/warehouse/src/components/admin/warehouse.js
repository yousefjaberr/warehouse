import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Warehouse() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>warehouses</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>ID</td>
    <td>name</td>
    <td>available space</td>
  </tr>
  <tr>
  <td>1</td>
    <td>tulkarm</td>
    <td>6</td>
    
  </tr>
  <tr>
  <td>2</td>
    <td>jenin</td>
    <td>3</td>
  </tr>
  <tr>
  <td>3</td>
    <td>al-shaaraweyeh</td>
    <td>8</td>
  </tr>
</table>)}
    </div>
  )
}

export default Warehouse