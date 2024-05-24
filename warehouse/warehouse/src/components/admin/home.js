import React from 'react'
import NavBar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
       
        <div className='home-cover'> <NavBar/>
        <h1>Warehouse Manegment System</h1>
        <div className='content1'>
            <button className='bt'><Link to='/admin/customers' className='lt'>customers</Link> </button>
            <button className='bt'><Link to='/admin/employee' className='lt'>employees</Link></button>
            <button className='bt'><Link to='/admin/machines' className='lt'>machines</Link></button>
        </div>   
        <div className='content2'>
            <button className='bt'><Link to='/admin/warehouse' className='lt'>warehouse</Link></button>
            <button className='bt'><Link to='/admin/reservations' className='lt'>reservation</Link></button>
            <button className='bt'><Link to='/admin/financial' className='lt'>financial</Link></button>
        </div>
            </div>
    </div>
  )
}

export default Home