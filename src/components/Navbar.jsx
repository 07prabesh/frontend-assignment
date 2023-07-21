import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    
    <nav class="navbar bg-dark  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
    <div class="container-fluid h5">
      <a class="navbar-brand" href="/">OnlineStore</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  justify-content-center h5" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active px-4" aria-current="page" to="/">Home</Link>
          <Link class="nav-link px-5" to="/details">Details</Link>
          <Link class="nav-link" to="/search">Search</Link>
          
        </div>
      </div>
    </div>
  </nav>



  </>
 
  )
}
