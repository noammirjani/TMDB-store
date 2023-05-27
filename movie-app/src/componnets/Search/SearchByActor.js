/**
 * SearchByActor Component
 *
 * A component for searching movies by actor.
 */
import { useEffect, useState } from "react";
import useApi from "../Utils/UseApi";
import SearchByText from "./SearchByText";
import UserMessage from "../MoviesDisplay/UserMessage";

/**
 * SearchByActor Component
 *
 * @param {Object} props - The component props.
 * @param {function} props.setUrl - The function to set the URL for the movie search.
 * @param {function} props.setPrevSearchInput - The function to set the previous search input.
 * @returns {JSX.Element} The rendered component.
 */
function SearchByActor({ setUrl, setPrevSearchInput  }) {
    const [filterValue, setFilterValue] = useState("");
    const [{ data}, doFetch] = useApi("", []);
    const [isValid, setIsValid] = useState(true);
    const [userInfo, setUserInfo] = useState("");

    /**
     * Retrieves the most popular actor from the search results.
     *
     * @returns {Object|null} The most popular actor.
     */
    const mostPopular = () => {
        if (data.length === 0) return null;

        return data.results.reduce((prevActor, currentActor) => {
            return currentActor.popularity > prevActor.popularity ? currentActor : prevActor;
        });
    };


    //hook for data change
    useEffect(() => {
        if(data.length !== 0 ){
            if (data.total_results !== 0) {
                const actor = mostPopular();
                setUserInfo(`All the movies of ${actor.name}:`);
                setUrl(`http://api.themoviedb.org/3/discover/movie?with_cast=${actor.id}`);
                setPrevSearchInput(filterValue);
            }
            else {
                setUrl("/no-data")
                setUserInfo("")
            }
        }
    }, [data]);


    /**
     * Handles the search button click event.
     */
    function handleClick() {
        if(!filterValue.trim()) return;

        if (!filterValue.match(/^[A-Za-z\s]+$/)) {
            setUrl("");
            setIsValid(false);
            setUserInfo("Actor name cannot contain special characters!");
        }

        else if (filterValue.trim()) {
            setIsValid(true);
            const name = filterValue.replace(" ", "+");
            doFetch(`https://api.themoviedb.org/3/search/person?query=${name}`);
        }
    }

    return (
        <>
            <SearchByText onChange={setFilterValue} onClick={handleClick} placeholder="actor" />
            {!isValid && <UserMessage userInfo={userInfo} isAlert={true} />}
            {isValid  && <UserMessage userInfo={userInfo} isAlert={false} />}
        </>
    );
}

export default SearchByActor;