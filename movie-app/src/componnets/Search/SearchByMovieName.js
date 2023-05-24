import {useState} from "react";
import SearchByText from "./SearchByText";
import UserMessage from "../MoviesDisplay/UserMessage";

function SearchByMovieName({ setUrl, setPrevSearchInput }) {
    const [filterValue, setFilterValue] = useState("");

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
