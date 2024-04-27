import React from 'react';
import ProductsList from '../sections/ProductsList';
//import { Button } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
import UsersList from '../sections/UsersList';

const Administration = () => {
    //const navigate=useNavigate();
    return (
        <>
        <div className='container m-3 py-3'>
        <UsersList/>
        </div>
        <div className='container m-3 py-3'>
        <ProductsList/>
        </div>
        </>
    );
};

export default Administration;