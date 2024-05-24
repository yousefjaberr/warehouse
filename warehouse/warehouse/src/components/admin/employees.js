import React, {useState } from 'react'
import '../customer.css'
import Navbar from './Navbar';

function Employees() {
const [ vis , setVis] =useState(true);

const changeVis = () =>{
    setVis(!vis);
}
  return (
  <div>
     <Navbar/>

     <h2>Employees</h2>

     <br/>

    <div onClick={changeVis} style={{cursor: 'pointer', backgroundColor: 'lightgrey', padding: '10px', marginBottom: '10px',display:'inline-block',width:'100%'}}>
            {vis ? 'Hide Table' : 'Show Table'}
        </div>
    {vis && (
    <table>
  <tr> 
    <td>ID</td>
    <td>name</td>
    <td>phone</td>
    <td>joint date</td>
    <td>salary</td>
    <td>Role</td>
  </tr>
  <tr>
  <td>100</td>
    <td>ahmad</td>
    <td>0599887742</td>
    <td>07/05/2021</td>
    <td>3500</td>
    <td>worker</td>
  </tr>
  <tr>
  <td>101</td>
    <td>yaseen</td>
    <td>0598756458</td>
    <td>11/11/2022</td>
    <td>3000</td>
    <td>worker</td>
  </tr>
  <tr>
  <td>102</td>
    <td>yazan</td>
    <td>0597656399</td>
    <td>25/04/2022</td>
    <td>3500</td>
    <td>worker</td>
  </tr>
  <tr>
  <td>103</td>
    <td>yousef</td>
    <td>0574812635</td>
    <td>01/07/2023</td>
    <td>3500</td>
    <td>worker</td>
  </tr>
</table>)}
    </div>
  )
}

export default Employees