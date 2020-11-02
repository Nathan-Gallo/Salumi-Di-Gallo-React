import React from 'react';
import { useInput } from '../hooks/input-hook.js';
import AuthService from '../services/auth.service';

const Register = (props: any): JSX.Element => {
    const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    const handleSubmit = (evt: any): void => {
        evt.preventDefault();
        const pw1 = (document.getElementById("createPassword") as HTMLInputElement).value;
        const pw2 = (document.getElementById("confirmPassword") as HTMLInputElement).value;


        if (pw1 === pw2) {
            AuthService.register(username, password).then(
                () => {
                    props.history.push("/login");
                    window.location.reload();
                },
                (error) => {
                    console.log(error)
                }
            );
            resetUsername();
            resetPassword();
        }
    }


    return (
        <main className="inner cover">
            <form className="form-signin" method="post" onSubmit={handleSubmit}>
                <div className="text-center mb-4"><a className="logo-form-master"><img className="mb-4 logo-form logo-link"
                    src="../images/logo.png" alt="logo-link-to-home" /><img className="logo-100px logo-link"
                        src="../images/logo-100px.png" alt="logo-100px-link-to-home" /></a></div>

                <div className="form-label-group">
                    <input type="text" id="createUsername" className="form-control" name="username" placeholder="Create a Username"
                        required {...bindUsername} />
                    <label>Create a Username</label>
                </div>

                <div className="form-label-group"><input type="password" id="createPassword" name="password" className="form-control"
                    placeholder="Password" required {...bindPassword} />
                    <label>Password</label>
                </div>

                <div className="form-label-group"><input type="password" id="confirmPassword" name="confirmPassword" className="form-control"
                    placeholder="Confirm Password" required />
                    <label>Confirm Password</label>
                </div>

                <div>
                    <button className="btn btn-dark btn-block" type="submit">Register</button>
                    <button className="btn btn-dark btn-block" type="reset">Cancel</button>
                </div>
            </form>
        </main >
    )
}

export default Register;