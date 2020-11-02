import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useInput } from '../hooks/input-hook.js';
import AuthService from '../services/auth.service';


function Login(props: any): JSX.Element {
    const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    const handleSubmit = (evt: any): void => {
        evt.preventDefault();
        AuthService.login(username, password).then(
            () => {
                props.history.push("/recipes");
                window.location.reload();
            },
            (error) => {
                console.log(error)
            }
        );
        resetUsername();
        resetPassword();
    }

    return (
        <main className="inner cover" id="mainContent">
            <form className="form-signin" onSubmit={handleSubmit}>
                <div className="text-center mb-4"><Link to="/" className="logo-form-master"><img
                    className="mb-4 logo-form logo-link" src="../images/logo.png" alt="logo-link-to-home" /><img
                        className="logo-100px logo-link" src="../images/logo-100px.png" alt="logo-100px-link-to-home" /></Link></div>

                <div className="form-label-group"><input type="text" id="inputUsername" className="form-control" name="username"
                    placeholder="Username" required {...bindUsername} />
                    <label>Username</label>
                </div>

                <div className="form-label-group"><input type="password" id="inputPassword" className="form-control" name="password"
                    placeholder="Password" required {...bindPassword} />
                    <label>Password</label>
                </div>

                <div className="checkbox mb-3"><label><input type="checkbox" id="remember" name="remember" value="remember" /><span
                    className="ml-1 text-dark">Remember me</span></label>
                </div>

                <div>
                    <button className="btn btn-dark btn-block" type="submit">Sign in</button>
                    <button className="btn btn-dark btn-block" type="reset">Cancel</button>
                </div>

                <div className="hide">
                    <br />
                    <div className="alert alert-danger">
                        <strong>Error!</strong>
                    </div>
                </div>

            </form>
        </main >
    )
}


export default withRouter(Login);