import React from 'react';
import ProductsList from '../sections/ProductsList';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UsersList from '../sections/UsersList';

const Administration = () => {
    const navigate=useNavigate();
    return (
        <>
        <div className='contaner m-3 py-3'>
            <Button variant='secondary' onClick={()=>{navigate("/create-products")}}>Crear Producto</Button>
        </div>
        <UsersList/>
        <ProductsList/>
        </>
    );
};

export default Administration;