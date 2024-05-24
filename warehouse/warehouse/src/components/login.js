import React from 'react'
import './login.css'
import { FaLock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='a'>
         <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='Email'/>
                    <MdEmail className='icon'/>
                    
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password'/>
                    <FaLock className='icon'/>
                </div>

                <button type='submit'><Link to='/admin/home' className='ddd'>Login</Link></button>
                <div className="reg-link">
                    <p>don't have an account? <Link to='/register'>register</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login