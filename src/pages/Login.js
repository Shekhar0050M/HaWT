const Login = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check" />
                <label class="form-check-label" for="check">Keep me logged in</label>
            </div>
            <button type="button" class="btn btn-primary">Login</button>
        </div>
    )
};

export default Login;
