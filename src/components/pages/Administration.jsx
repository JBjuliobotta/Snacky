import React from 'react';
import ProductsList from '../sections/ProductsList';
import UsersList from '../sections/UsersList';

const Administration = () => {
    return (
        <>
        <div className='m-3 py-3 d-flex justify-content-center'>
        <UsersList/>
        </div>
        <div className='m-3 py-3 d-flex justify-content-center'>
        <ProductsList/>
        </div>
        </>
    );
};

export default Administration;