import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    
    const toggleSignUp = () => {
        setShowSignUp(!showSignUp)
    }

    return (
        <main>
            <h1>Welcome to Quick Notes</h1>
            <LoginForm setUser={ setUser }/>
            <h3>Don't have an account?</h3>
            <button onClick={toggleSignUp}> {showSignUp ? "Hide sign up" : "Sign up"}</button>
            {showSignUp && <SignUpForm setUser={ setUser }/>}
        </main>
    );
};

export default AuthPage;