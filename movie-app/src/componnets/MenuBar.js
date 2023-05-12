import {Link, Outlet} from 'react-router-dom';

function MenuBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand bg-dark border-bottom">
                <div className="container-fluid">
                    <img src="/assets/logo.png" alt="logo" className="top-0 start-0" />

                    <div className="collapse navbar-collapse justify-content-center">
                        <div className="navbar-nav fs-3">
                            <Link to="/"
                                  className="nav-link text-white border rounded-pill mx-3 hover-opacity">
                                Home
                            </Link>
                            <Link to="/"
                                  className="nav-link text-white border rounded-pill mx-3 hover-opacity">
                                Cart
                            </Link>
                            <Link to="/"
                                  className="nav-link text-white border rounded-pill mx-3 hover-opacity">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <Outlet />
            <style>
                {`
        .hover-opacity:hover {
          opacity: 0.50;
        }
        `}
            </style>
        </>
    );
}

export default MenuBar;
