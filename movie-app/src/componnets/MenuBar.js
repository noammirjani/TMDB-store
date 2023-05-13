import {Link, Outlet} from 'react-router-dom';
import '../styles/MenuBar.css'

function MenuBar() {

    const menuOptions = ["home", "search", "cart", "checkout"];

    const optionsList =  menuOptions.map( (op) => {
        return <li className="nav-item col-6 mx-auto my-1">
            <Link to={`/${op === 'home' ? '' : op}`}
                  className="nav-link text-white border rounded-pill hover-opacity text-capitalize">
                {op}
            </Link>
        </li>;
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/logo.png" alt="logo" className="top-0 start-0 logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav justify-content-center text-center mx-auto">
                            {optionsList}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default MenuBar;
