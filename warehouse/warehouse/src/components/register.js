import React from 'react'
import './register.css'
import { Link } from 'react-router-dom';
import { MdOutlineSpaceBar } from "react-icons/md";
import { FaLock ,FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";




function Register() {
  return (
    <div className='a'>
    <div className='wrapper'>
            <form action=''>
                <h1>register</h1>
                <div className="input-box">
                    <input type='email' placeholder='Email'/>
                    <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type='text' placeholder='name'/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type='text' placeholder='phone number'/>
                    <FaPhone className='icon'/>

                </div>
                <div className="input-box">
                    <input type='text' placeholder='reserved space'/>
                    <MdOutlineSpaceBar className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='password'/>
                    <FaLock className='icon'/>
                </div>
                <label className='label'>your payment amount is : 5000</label>
                
                
                <button type='submit'>register</button>
                <div className="reg-link">
                    <p>alredy an account? <Link to='/'>Login!</Link></p>
                </div>

            </form>
        </div>
        </div>
  )
}

export default Register