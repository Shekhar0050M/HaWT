const Register = () => {
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
            <div class="mb-3">
                <label for="repeatpassword" class="form-label">Repeat Password</label>
                <input type="password" class="form-control" id="repeatpassword" />
            </div>
            <button type="button" class="btn btn-primary">Login</button>
        </div>
    )
};

export default Register;
