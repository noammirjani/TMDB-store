import { useEffect, useState } from "react";
import useApi from "../utils/UseApi";
import SearchByText from "./SearchByText";
import UserMessage from "../moviesDisplay/UserMessage";

function SearchByActor({ setUrl }) {
    const [filterValue, setFilterValue] = useState("");
    const [{ data}, doFetch] = useApi("", []);
    const [isValid, setIsValid] = useState(true);
    const [userInfo, setUserInfo] = useState("");

    const mostPopular = () => {
        if (data.length === 0) return null;

        return data.results.reduce((prevActor, currentActor) => {
            return currentActor.popularity > prevActor.popularity ? currentActor : prevActor;
        });
    };

    useEffect(() => {
        if(data.length !== 0 ){
            if (data.total_results !== 0) {
                setUserInfo("");
                setUrl(`http://api.themoviedb.org/3/discover/movie?with_cast=${mostPopular().id}`);
            }
            else {
                setUrl("/no-data")
            }
        }
    }, [data]);

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
            // isCompleteName()
        }
    }

    // function isCompleteName() {
    //     const actor = mostPopular()?.original_name;
    //     if (actor && actor !== filterValue)
    //         return `All the movies of ${actor}:`;
    //     else return ""
    // }

    return (
        <>
            <SearchByText onChange={setFilterValue} onClick={handleClick} placeholder="actor" />
            {!isValid && <UserMessage userInfo={userInfo} isAlert={true} />}
            {isValid  && <UserMessage userInfo={userInfo} isAlert={false} />}
        </>
    );
}

export default SearchByActor;
