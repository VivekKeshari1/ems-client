import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >EMS</Link>   
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/"className="nav-link active" aria-current="page" >Home</Link>   
          </li>
          <li className="nav-item">
          <Link to="/Login" className="nav-link">Login</Link>
                    </li>
          <li className="nav-item">
            <Link  to="/Register" className="nav-link">Register</Link>   
          </li>
          <li className="nav-item">
            <Link  to="/Aboutme" className="nav-link">Aboutme</Link>   
          </li>
          <li className="nav-item">
            <Link  to="/AddEvent" className="nav-link">add event</Link>   
          </li>
          <li className="nav-item">
            <Link  to="/EventList" className="nav-link">EventList</Link>   
          </li>
         
      
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar