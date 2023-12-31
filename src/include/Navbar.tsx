const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md position-absolute w-100" style={{ zIndex: "1" }}>
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='logo-home-page position-relative me-3'>
                <a className="navbar-brand text-white" href="/#" style={{fontSize: "30px"}}>Travel</a>
                <img className='logo-arrow' src="./images/logo-arrow.png" alt="logo-arrow" />
            </div>
            <div className="collapse navbar-collapse justify-content-evenly" id="navbarToggler">
                <div className='nav-item-wrap'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap: "3rem", alignItems: "center"}}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/#">Action</a></li>
                            <li><a className="dropdown-item" href="/#">Another action</a></li>
                            <li><a className="dropdown-item" href="/#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/#">Upcoming Packages</a>
                    </li>
                </ul>
                </div>
                <button className='btn text-white' style={{backgroundColor: "#DF6951"}}>Get in touch</button>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;