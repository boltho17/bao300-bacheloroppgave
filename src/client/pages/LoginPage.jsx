import React, {useCallback, useContext} from "react";
import {Link} from "react-router-dom";
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
            <h1 className="log-in-title">Velkommen!</h1>
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
                <button className="reg-btn" type="submit">Logg inn</button>
            </form>
            <p style={{fontSize: '12px', textAlign: 'center'}}>Har du ingen bruker? <Link to="/signup">Registrer deg her</Link></p>
        </div>
    );
};

export default withRouter(LoginPage);
