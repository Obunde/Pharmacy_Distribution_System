import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Alidac from '../pages/Alidac';
import Respicare from '../pages/Respicare';
import Generics from '../pages/Generics';
import OverallSales from '../pages/OverallSales';
import EmployeePerformance from '../pages/EmployeePerformance';

const AppRoutes = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alidac" element={<Alidac />} />
            <Route path="/respicare" element={<Respicare />} />
            <Route path="/generics" element={<Generics />} />
            <Route path="/overall-sales" element={<OverallSales />} />
            <Route path="/employee-performance" element={<EmployeePerformance />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
