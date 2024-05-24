import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/admin/home" className="navbar-logo">warehouse</Link>
      </div>
      <ul  className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/admin/home" className="navbar-link">Home</Link></li>
        <li><Link to="/admin/customers" className="navbar-link">customers</Link></li>
        <li><Link to="/admin/machines" className="navbar-link">machines</Link></li>
        <li><Link to="/admin/reservations" className="navbar-link">reservations</Link></li>
        <li><Link to="/admin/employee" className="navbar-link">employees</Link></li>
        <li><Link to="/admin/warehouse" className="navbar-link">warehouse</Link></li>
        <li><Link to="/admin/financial" className="navbar-link">financial</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default NavBar;