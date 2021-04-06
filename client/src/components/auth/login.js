import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    //Login state
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    //Get from user
    const{email, password} = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //To let the user login
    const onSubmit = e => {
        e.preventDefault();
    }

    return(
        <div className="form-user">
            <div className="container-form shade-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="field-form">
                    <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className='field-form'>
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Login" />
                    </div>
                </form>
                <Link to ={'/new-account'} className="link-account">
                    Get an account
                </Link>
            </div>
        </div>
    );
}

export default Login;