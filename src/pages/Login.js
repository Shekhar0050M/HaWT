import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ username, password });
        navigate('/dashboard')
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <form onSubmit={handleSubmit}>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="check" />
                    <label class="form-check-label" for="check">Keep me logged in</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    )
};

export default Login;
