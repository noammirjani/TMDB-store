import {Container, Row} from "react-bootstrap";
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

function MoviesGrid (props){

    //const [url, setUrl] = useState(props.url);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // This function will be called whenever the `props.url` value changes
        function handleResponse(res) {
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            return res.json();
        }

        function handleJson(jsonObj) {
            buildMovieCard(jsonObj);
            console.log("The Json returned is ", jsonObj)
        }

        function handleError(error) {
            // setError("An error from movies website is: " + error.toString());
            console.log(error.toString())
        }

        function getMoviesData() {

            fetch(props.url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ2ZGRkMDVlYjNiMjAxOGIwYTZjMzhhN2RlZjk1ZCIsInN1YiI6IjY0NThlMjdjMWI3MGFlMDE0NWVkNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w46933noO_o7Ch2z1y0ogBxrkuC5WlS14o11ltrZ2sY'
                }
            })
                .then(handleResponse)
                .then(handleJson)
                .catch(handleError);
        }

        getMoviesData();
    }, [props.url]);



    function buildMovieCard(data){
        console.log("DATA IS: " , data)
        const cards = data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ));
        setCards(cards)
    }

    return(
        <>
            <Container className="mt-5 py-5 container container-fluid">
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                    {cards}
                </Row>
            </Container>
        </>
    );
}

export default MoviesGrid;