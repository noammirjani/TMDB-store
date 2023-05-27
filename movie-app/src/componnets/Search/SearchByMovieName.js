import {useState} from "react";
import SearchByText from "./SearchByText";
import UserMessage from "../MoviesDisplay/UserMessage";


/**
 * SearchByMovieName Component
 *
 * A component for searching movies by name.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.setUrl - The function to set the search URL.
 * @param {function} props.setPrevSearchInput - The function to set the previous search input.
 * @returns {JSX.Element} The rendered component.
 */
function SearchByMovieName({ setUrl, setPrevSearchInput }) {
    const [filterValue, setFilterValue] = useState("");


    /**
     * Handles the button click event.
     */
    function handleClick() {
        if (filterValue.trim()) {
            const name = filterValue.replace(" ", "+");
            const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
            setUrl(url);
            setPrevSearchInput(filterValue);
        }
    }

    return (
        <>
            <SearchByText onChange={setFilterValue} onClick={handleClick} placeholder="movie name"/>
            <UserMessage userInfo={""} isAlert={false} />
        </>
    );
}

export default SearchByMovieName;
