import React, {useCallback, useContext} from "react";
import {Redirect, withRouter} from "react-router";
import app from "../components/Firebase/firebase";
import {AuthContext} from "../components/Firebase/AuthContext";
import GetUser from "../components/GetUser";

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

                //console.log(app.auth().currentUser.email);

                // DENNE LINJEN KJØRER IKKE:
                // GetUser(app.auth().currentUser.email)


            } catch (error) {
                alert(error);
            }
        },
        [history],
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        console.log("Successfully logged in! Redirecting..");
        return <Redirect to="/"/>;

    } else return (
        <div>
            <h1>Sign In Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(LoginPage);
