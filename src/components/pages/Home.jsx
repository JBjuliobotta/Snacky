import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Home = () => {
    const {currentUser}=useContext(UserContext);

    console.log("currentuser", currentUser);

    return (
        <div>
            <h1>Inicio</h1>
        </div>
    );
};

export default Home;