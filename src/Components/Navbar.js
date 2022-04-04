import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
      <nav className="navbar  navbar navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Home
          </Link>

            <div className='navMenu'>
              <Link 
                className="nav-link"
                aria-current="page"
                to="/blogs"
              >
                Blogs
              </Link>

              <Link 
               className="nav-link active"
                aria-current="page"
                to="/blogs/Create"
              >
                Create
              </Link>
              
              <Link
                className="nav-link"
                aria-current="page"
                to="/blogs/Edit"
              >
                Edit
              </Link>
              </div>
        </div>
      </nav>
    </div>
  );
}
export default navbar;
