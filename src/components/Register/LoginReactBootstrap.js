import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LoginReactBootstrap = () => {
    const handleRegister = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value

    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Please login!!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'><small>New to our website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginReactBootstrap;