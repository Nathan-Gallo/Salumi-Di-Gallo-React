import React from 'react';
import { withRouter } from 'react-router';


function Home(): JSX.Element {

    return (
        <main className="inner cover" id="mainContent">
            <h1 className="cover-heading display-4 italiana">Salumi di Gallo</h1>
            <p className="lead">
                <img className="logo-lg" src="images/logo-lg.png" alt="logo-lg" />
                <img className="logo" src="images/logo.png"
                    alt="logo" />
                <img className="logo-100px" src="images/logo-100px.png" alt="logo-100px" />
            </p>
            <p className="h3 font-weight-bold italiana">Welcome to our passion project, please log in or register to view our
        recipes</p>
            <p className="lead btn-group mt-2" role="group">
                <a href="/login">
                    <button className=" italiana btn btn-lg btn-dark">Log in</button>
                </a>
                <a href="/register">
                    <button className=" italiana btn btn-lg btn-dark">Register</button>
                </a>
            </p>
        </main>
    )

}

export default withRouter(Home);