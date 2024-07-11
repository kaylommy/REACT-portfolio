// import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default App;