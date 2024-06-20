import React from 'react';
import CarList from '../Components/CarList';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to the Car Management App</h1>
            <CarList />
        </div>
    );
};

export default Home;