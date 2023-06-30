import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <Link className="nav-link" to="/">Harv.io</Link>
        </div>
        <div className="nav-links">
            <div className="nav-item">
                <Link className="nav-link" to="/"></Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar