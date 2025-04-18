import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pharmacy Distribution</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/alidac">Alidac</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/respicare">Respicare</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/generics">Generics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/overall-sales">Overall Sales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employee-performance">Performance</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
