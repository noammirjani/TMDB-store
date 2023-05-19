import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import useApi from '../utils/UseApi';
import UserMessage from "./UserMessage";

function MoviesGrid(props) {
    const [{ data, isLoading, isError, page}, doFetch, fetchPage] = useApi("", []);
    const [cards, setCards] = useState([]);
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, [isLoading]);

    useEffect(() => {
        doFetch(props.url);
    }, [doFetch, props.url]);

    useEffect(() => {
        if(data.length === 0){
            setCards([]);
        }
        else if (data.total_results === 0){
            setCards([]);
            setUserInfo(" Not found...🔍")
        } else{
            setUserInfo("");
            buildMovieCard();
        }
    }, [data]);

    function handleScroll() {
        const isAtBottom =  window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

        if (isAtBottom && !isLoading){
            fetchPage(page+1)
            console.log("new page")
        }
    }

    function buildMovieCard() {
        if (data.length === 0) {
            setCards([]);
        } else {
            console.log("create grid", data);
            const newCards = data.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ));

            if(page > 1) setCards([...cards, newCards]);
            else setCards(newCards);
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
                {isLoading && <button className="btn btn-outline-danger"> loading </button>}
            </Container>
        </>
    );
}

export default MoviesGrid;
