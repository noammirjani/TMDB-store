
import {Link} from 'react-router-dom';
import {Outlet} from "react-router";

function MenuBar(props) {

    return (
        <div>
            <nav className="nav flex-column bg-black w-25 vh-100 text-white">
                <div className="d-flex flex-column align-items-center">
                    <img src="/logos-choose-one/movie-time-1.png"
                         alt="logo"
                         className=" w-100 mt-5 mt-md-0" />
                </div>

                <Link  to="/" className="nav-link fs-4 mt-5 mb-4 text-light-emphasis">Home</Link>
                <Link  to="/" className="nav-link fs-4 mb-4 text-light-emphasis">option1</Link>
                <Link  to="/" className="nav-link fs-4 mb-4 text-light-emphasis">option2</Link>
                <Link  to="/" className="nav-link fs-4 mb-4 text-light-emphasis">option3</Link>

                <div className="text-center fs-6 p-3 bg-dark bg-opacity-100 position-absolute bottom-0 w-25">
                    <span>©{new Date().getFullYear()} <br/></span>
                    <span className="d-none d-md-inline">ARIEL-AMON & NOAM-MIRJANI</span>
                </div>
            </nav>

            <Outlet />

        </div>
    );
}
export default MenuBar;