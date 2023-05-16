import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import useApi from '../utils/UseApi';
import UserMessage from "./UserMessage";

function MoviesGrid(props) {
     const [{ data, isLoading, isError }, doFetch] = useApi("", []);
     const [cards, setCards] = useState([]);
     const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        doFetch(props.url);
    }, [props.url]);


    useEffect(() => {
        if (data.length === 0) {
            setCards([]);
            setUserInfo(" Not found...🔍")
        }
        else{
            setUserInfo("")
            buildMovieCard()
        }
    }, [data]);


    function buildMovieCard() {
        if (data.length === 0) {
            setCards([]);
            console.log("we dont care")
        }else {
            console.log("we care", data)
            const cards = data.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ));
            setCards(cards);
        }
    }

    return (
        <>
            <Container className="mt-5 py-5 container container-fluid">
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                    {cards}
                </Row>
                <Row>
                    {userInfo && <UserMessage userInfo={userInfo} isAlert={false} />}
                </Row>
            </Container>
        </>
    );
}

export default MoviesGrid;
