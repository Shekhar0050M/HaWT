

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid collapse navbar-collapse">
                <a href="/" className="navbar-brand">Decentralized Voting Platform</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="login" className="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="register" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
            <div class="container-fluid row justify-content-end">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Navbar;
