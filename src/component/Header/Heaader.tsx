import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSync, IoIosArrowDropleftCircle } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';


const Heaader = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="fs-2 navbar-brand d-none d-lg-block" to={`/`}><span className='fw-bold text-primary'>Yamak</span>.ai</Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className='fs-1 text-primary text-opacity-50'><IoIosArrowDropleftCircle /></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Link className="fs-3 navbar-brand" to={`/`}><span className='fw-bold text-primary'>Yamak</span>.ai</Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Social Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Sales Copy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Others</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Blogs</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='d-flex align-items-center ms-md-4'>
                    <div className="">
                        <button className='border border-0 p-0'><IoIosSync className='fs-3 bg-white' /></button>
                    </div>
                    <div className="ms-3">
                        <button className='border border-0 p-0 text-primary text-opacity-50'><FaUserCircle className='fs-1 bg-white' /></button>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Heaader;