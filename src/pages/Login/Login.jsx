import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';

import './Login.css';
import { verifyUser } from '../../data/user';

function Login({ setToken, setRole }) {
    const [error, setError] = useState('');
    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <div className="alert">{error}</div>}
            <Form.Group>
                <Form.Label htmlFor="username" className='mt-2'>Username</Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    placeholder='user'
                    ref={usernameRef}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="password" className='mt-2'>Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder='pass'
                    ref={passwordRef}
                />
            </Form.Group>
            <div className='button-container'>

                <button className='btn btn-danger mt-4' onClick={() => {
                    usernameRef.current.value = '';
                    passwordRef.current.value = '';
                }}>
                    Clear</button>

                <button className='btn btn-success mt-4' onClick={
                    () => {
                        const user = usernameRef.current.value;
                        const pass = passwordRef.current.value;
                        usernameRef.current.value = '';
                        passwordRef.current.value = '';
                        const userInfo = verifyUser(user, pass);
                        if (userInfo === null) {
                            setError('Wrong username or password!');
                        } else {
                            setToken(userInfo.token);
                            setRole(userInfo.role);
                        }
                    }
                }>Login</button>
            </div>
        </div>
    );
}

export default Login;
