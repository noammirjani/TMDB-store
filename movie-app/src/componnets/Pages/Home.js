import MoviesGrid from "../movies/MoviesGrid";
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/home.css'

const HomePage = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "  Discover trending movies on our home page. Explore popular titles and find your next favorite. Head to our search page for specific movies. Enter a title, genre, or keywords to find what you're looking for. Enjoy your journey through the world of movies!";

    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        const typeText = () => {
            timeout = setTimeout(() => {
                setTypedText((prevText) => prevText + fullText.charAt(currentIndex));
                currentIndex++;
                if (currentIndex < fullText.length) {
                    typeText();
                }
            }, 50);
        };

        typeText();

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <Container className="bg-dark text-secondary px-4 mt-5 py-5 p-5 text-center">
                {/*<h1 className="py-5 display-5 fw-bold text-white text-uppercase">Welcome to Movie Time</h1>*/}
                <div className="container container-sm container-words">
                    <h2 className="title-words text-capitalize">
                        <span className="title-word title-word-1">welcome </span>
                        <span className="title-word title-word-2">to </span>
                        <span className="title-word title-word-3">movie </span>
                        <span className="title-word title-word-4">time </span>
                    </h2>
                </div>
                <Container>
                    <Row className="row">
                        <div className="col-lg-12 text-center">
                            <p className="fs-4 mb-4 text-white">{typedText}</p>
                        </div>
                    </Row>
                </Container>
            </Container>
            <MoviesGrid url={"https://api.themoviedb.org/3/movie/popular?"} />

        </>
    );
};

export default HomePage;
