import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const LoginReactBootstrap = () => {
    const [success, setSuccess] = useState(false)
    const [loginError, setLoginError] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);

        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                event.target.reset();
            })
            .catch(error => {
                console.error('error: ', error)
                setLoginError(true)
            })
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

                <p>{success && <h6 className='text-success'><small>Login Successful</small></h6>}</p>

                <p>{loginError && <h6 className='text-danger'><small>Please try again!!</small></h6>}</p>


                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <p className='mt-3'><small>New to our website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginReactBootstrap;