import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container ">
                    <Link className="navbar-brand text-light" to="/">logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="p-3 bg-dark navbar-nav mb-2 mb-lg-0 ms-auto z-1">
                        <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar;