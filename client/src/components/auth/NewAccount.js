import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewAccount = () => {
    //Login state
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    //Get from user
    const{name, email, password, confirm} = user;

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
                <h1>Get an account</h1>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="field-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

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

                    <div className="field-form">
                    <label htmlFor="confirm">Confirm your password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className='field-form'>
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Register" />
                    </div>
                </form>
                <Link to ={'/'} className="link-account">
                    Go back to login
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;