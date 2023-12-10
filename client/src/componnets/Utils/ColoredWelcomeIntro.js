import '../../styles/home.css'

/**
 * ColoredWelcomeIntro Component
 *
 * A component for displaying the colored welcome intro.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ColoredWelcomeIntro = () => {

    return (
        <div className="container container-sm container-words">
            <h2 className="title-words text-capitalize">
                <span className="title-word title-word-1">welcome </span>
                <span className="title-word title-word-2">to </span>
                <span className="title-word title-word-3">movie </span>
                <span className="title-word title-word-4">time </span>
            </h2>
        </div>
    );
};

export default ColoredWelcomeIntro;