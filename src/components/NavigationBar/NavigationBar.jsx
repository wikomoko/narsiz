import { Link } from "react-router-dom"
import Logo from '../../assets/images/logo.png'
export default function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" height={30} className="d-inline-block align-text-top" />
                        <span className="ms-3">Narsi<span className="color-main"><b>z</b></span></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/editor" className="nav-link" >Editor</Link>
                            </li>
                        </ul> */}
                        <span className="mx-auto"></span>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/editor" className="nav-link" >Editor</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}