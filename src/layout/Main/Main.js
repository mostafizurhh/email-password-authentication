import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='mt-3 ms-3 mb-3'>
                <Link to='/register' className='me-3'>Register</Link>
                <Link to='/login'>Log In</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;