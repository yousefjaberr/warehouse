import React from 'react'
import './customer.css'

function Customer() {
  return (
    <div>
        <h2>your info :</h2>
<table>
{/* <tr>
    <td>your ID</td>
    <td>#112</td>
  </tr>*/}
  <tr> 
    <td>name</td>
    <td>yousef jaber</td>
  </tr>
  <tr>
    <td>email</td>
    <td>yousef@gmail.com</td>
  </tr>
  <tr>
    <td>phone</td>
    <td>0599885647</td>
  </tr>
  <tr>
    <td>reserved space</td>
    <td>5</td>
  </tr>
  <tr>
    <td>payment amount</td>
    <td>5000$</td>
  </tr>
  
</table>
    </div>
  )
}

export default Customer