import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';

import { verifyUser } from '../../data/user';

import './Login.css';

const Login = ({ setToken, setRole }) => {
    const [error, setError] = useState('');
    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="login-container tech-theme">
            <Image src='https://mercuriuster.github.io/_multipages/stdempimg.jpg' style={{ border: '2.5px solid lightsalmon' }} alt="Woradech Ardvichai" />
            {error && <div className="alert alert-danger">{error}</div>}
            <Form className="login-form">
                <Form.Group className="form-row hint-hover">
                    <div className="label-box">
                        <span className='bi bi-person'></span>&nbsp;
                        Username
                        <span className="hint-popup">Type "user"</span>
                    </div>
                    &nbsp;
                    <Form.Control
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        ref={usernameRef}
                        className="input-field"
                    />
                </Form.Group>
                <Form.Group className="form-row hint-hover">
                    <div className="label-box">
                        <span className='bi bi-key'></span>&nbsp;
                        Password
                        <span className="hint-popup">Type "pass"</span>
                    </div>
                    &nbsp;
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        ref={passwordRef}
                        className="input-field"
                    />
                </Form.Group>
                <div className="button-container">
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            usernameRef.current.value = '';
                            passwordRef.current.value = '';
                        }}
                    >
                        Clear
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => {
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
                        }}
                    >
                        Login
                    </button>
                </div>
            </Form>
            <div className="sticker-container">
                <img
                    src="https://cdn3.emoji.gg/emojis/4646-kiana-blinking.png"
                    alt="Animated Sticker"
                    className="sticker"
                />
            </div>
        </div>
    );
};

export default Login;
