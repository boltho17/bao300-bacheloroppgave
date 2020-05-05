import React, {useCallback, useContext} from "react";
import {Redirect, withRouter} from "react-router";
import app from "../components/Firebase/firebase";
import {AuthContext} from "../components/Firebase/AuthContext";

const LoginPage = ({history}) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");

            } catch (error) {
                console.log(error);
            }
        },
        [history],
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        console.log("Successfully logged in! Redirecting..");
        return <Redirect to="/"/>;

    } else return (
        <div className="log-in-cont">
            <h1 className="log-in-title">Sign In Page</h1>
            <form className="log-in-form" onSubmit={handleLogin}>
                <div className="form-group">
                <label>
                    Email
                </label>
                <input name="email" type="email" placeholder="Email"/>
                
                </div>
                <div className="form-group">
                <label>
                    Password
                </label>
                <input name="password" type="password" placeholder="Password"/>
                </div>
                <button className="reg-btn" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(LoginPage);
