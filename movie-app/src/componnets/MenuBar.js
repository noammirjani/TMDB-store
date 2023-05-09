
import {Link} from 'react-router-dom';
import {Outlet} from "react-router";

function MenuBar(props) {

    return (
        <div>

            <h1>An example of browser-router</h1>

            <Link to="/">Home</Link> {' '} | {' '}
            {/*<Link to="/otherpage">Other page</Link> {' '} | {' '}*/}
            {/*<Link to="/params/12">Params page</Link>*/}

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />

        </div>
    );
}
export default MenuBar;