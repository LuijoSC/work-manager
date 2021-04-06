import React from 'react';

const Login = () => {

    const onChange = () => {

    }

    return(
        <div className="form-user">
            <div className="container-form shade-dark">
                <h1>Login</h1>
                <form>
                    <div className="field-form">
                        <label htmlfor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="field-form">
                    <label htmlfor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className='field-form'>
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;