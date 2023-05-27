/**
 * HomePage Component
 *
 * A component that displays the home page with a welcome message and a grid of popular movies.
 */
import MoviesGrid from "../MoviesDisplay/MoviesGrid";
import { Container } from 'react-bootstrap';
import TypingIntro from "../Utils/TypingIntro";
import ColoredWelcomeIntro from "../Utils/ColoredWelcomeIntro";


/**
 * HomePage Component
 *
 * @returns {JSX.Element} The rendered component.
 */
const HomePage = () => {

    return (
        <>
            <Container className="bg-dark text-secondary px-4 mt-5 py-5 p-5 text-center">
                <ColoredWelcomeIntro />
                <TypingIntro />
            </Container>
            <MoviesGrid url={"https://api.themoviedb.org/3/movie/popular?"} />
        </>
    );
};

export default HomePage;