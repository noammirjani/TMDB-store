import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import useApi from '../Utils/UseApi';
import UserMessage from "./UserMessage";
import Loading from "../Utils/Loading";


/**
 * Component for displaying a grid of movies.
 *
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL for fetching the movie data.
 * @returns {JSX.Element} The MoviesGrid component.
 */
function MoviesGrid(props) {
    const [{ data, isError, errorMsg, page, isMorePages, isLoading}, doFetch, fetchPage] = useApi("", []);
    const [cards, setCards] = useState([]);
    const [userInfo, setUserInfo] = useState("");

    // hook for loading trigger for the scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, [isLoading]);

    // hook for url changing
    useEffect(() => {
        doFetch(props.url);
    }, [doFetch, props.url]);

    // hook for data change
    useEffect(() => {
        if(data.length === 0){
            setCards([]);
            if(isError) setUserInfo(`${errorMsg.code} : ${errorMsg.msg}` );
        }
        else if (data.total_results === 0){
            setCards([]);
            setUserInfo(" Not found...🔍")
        } else{
            setUserInfo("");
            buildMovieCard();
        }
    }, [data]);


    /**
     * Event handler for scrolling.
     */
    function handleScroll() {
        const isAtBottom =  window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

        if (isAtBottom && !isLoading && isMorePages){
            fetchPage(page+1)
        }
    }


    /**
     * Builds the movie cards based on the data.
     */
    function buildMovieCard() {
        if (data.length === 0) {
            setCards([]);
        } else {
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
                    {!isError && userInfo && <UserMessage userInfo={userInfo} isAlert={false} />}
                </Row>
                {!isError && isLoading && <Loading/>}
                {isError &&  <UserMessage userInfo={userInfo} isAlert={false}/> }
            </Container>
        </>
    );
}

export default MoviesGrid;