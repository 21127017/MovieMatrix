import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email, password);

        if (email === "admin@moviematrix.com") {
            setJwtToken("abs");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/")
        } else {
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid credentials");
        }
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <Input 
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autocomplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input 
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autocomplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />

                <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default Login;