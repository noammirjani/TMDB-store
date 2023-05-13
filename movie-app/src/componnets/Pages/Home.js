// import {Container} from "react-bootstrap";
import MoviesGrid from "../MoviesGrid";


function Home(){


    return(
        <MoviesGrid url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}>

        </MoviesGrid>
    );
}

export default Home;