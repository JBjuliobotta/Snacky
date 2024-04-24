import React from 'react';
import ProductsList from '../sections/ProductsList';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Administration = () => {
    const navigate=useNavigate();
    return (
        <>
        <h1>Administración</h1>
        <div className='contaner m-3 py-3'>
            <Button variant='secondary' onClick={()=>{navigate("/create-products")}}>Crear Producto</Button>
        </div>
        <ProductsList/>
        </>
    );
};

export default Administration;