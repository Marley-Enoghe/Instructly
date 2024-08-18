import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {


    return (
        <div>
            <nav className="navbar  navbar-expand-lg bg-white">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand p-0 text-capitalize" href="/">{props.title}</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex align-items-center justify-content-center " id="navbarNavDropdown">                        
                        <ul className="navbar-nav d-flex justify-content-center align-items-center ">
                            <li className="nav-item">
                                <Link className="nav-link p-lg-0 px-lg-2 py-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-lg-2 p-lg-0 " to="/">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-lg-2 p-lg-0 " to="/about">About</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link px-lg-2 p-lg-0 py-2" to="/admin/register">Register</Link>
                            </li>
                        </ul> 
                        <div className=' d-lg-none d-flex justify-content-center mainreg'>
                            <button type="button" className="btn text-capitalize  reg">login</button> 
                        </div>
                    </div>
                    <div className='d-none d-lg-flex'>
                        <button type="button" className=" btn text-capitalize fs-5  reg">login</button> 
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default header;