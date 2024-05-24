import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Customer from '../Customer'
import Employees from '../admin/employees'
import Warehouse from '../admin/warehouse'
import Customers from '../admin/customers'
import Machines from '../admin/machines'
import Reservations from '../admin/reservations'
import Financial from '../admin/financial'
import Home from '../admin/home'

function Router() {
  return (
    <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route path='/register' element = {<Register/>} />
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/admin/employee' element={<Employees/>}/>
        <Route path='/admin/warehouse' element={<Warehouse/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>
        <Route path='/admin/machines' element={<Machines/>}/>
        <Route path='/admin/reservations' element={<Reservations/>}/>
        <Route path='/admin/financial' element={<Financial/>}/>
        <Route path='/admin/home' element={<Home/>}/>
    </Routes>
  )
}

export default Router