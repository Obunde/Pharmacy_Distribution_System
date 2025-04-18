import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Alidac from '../pages/Alidac';
import Respicare from '../pages/Respicare';
import Generics from '../pages/Generics';
import OverallSales from '../pages/OverallSales';
import EmployeePerformance from '../pages/EmployeePerformance';
import SelectedFile from '../pages/SelectedFile';

const AppRoutes = () => {
    const location = useLocation();

    // Hide Navbar on the Home page
    const showNavbar = location.pathname !== '/';

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alidac" element={<Alidac />} />
                <Route path="/respicare" element={<Respicare />} />
                <Route path="/generics" element={<Generics />} />
                <Route path="/overall-sales" element={<OverallSales />} />
                <Route path="/employee-performance" element={<EmployeePerformance />} />
                <Route path="/selected-file/:filename" element={<SelectedFile />} />
            </Routes>
        </>
    );
};

// Wrap it in BrowserRouter at the top level in App.jsx
const AppRoutesWithRouter = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default AppRoutesWithRouter;
