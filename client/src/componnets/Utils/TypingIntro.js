import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';


/**
 * TypingIntro Component
 *
 * A component that displays a typing animation to introduce the application.
 *
 * @returns {JSX.Element} The rendered component.
 */
const TypingIntro = () => {
    const [typedText, setTypedText] = useState('');

    const fullText = "  Discover trending movies on our home page. Explore popular titles and find your next favorite. " +
        "Head to our search page for specific movies. Enter a title, genre, or keywords to find what you're " +
        "looking for. Enjoy your journey through the world of movies!";


    //use effect on text
    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        /**
         * typeText Function
         * Recursively adds characters from `fullText` to `typedText` over time to create the typing animation.
         */
        const typeText = () => {
            timeout = setTimeout(() => {
                setTypedText((prevText) => prevText + fullText.charAt(currentIndex));
                currentIndex++;
                if (currentIndex < fullText.length) {
                    typeText();
                }
            }, 50);
        };
        // Start the typing animation
        typeText();
        // Clean up the timeout when the component unmounts
        return () => {clearTimeout(timeout);};
    }, [fullText]);

    return (
        <Container>
            <Row className="row">
                <div className="col-lg-12 text-center">
                    <p className="fs-3 mb-4 text-white">{typedText}</p>
                </div>
            </Row>
        </Container>
    );
};

export default TypingIntro;
