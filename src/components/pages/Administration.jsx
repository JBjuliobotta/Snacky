import React from 'react';
import ProductsList from '../sections/ProductsList';
import UsersList from '../sections/UsersList';

const Administration = () => {
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