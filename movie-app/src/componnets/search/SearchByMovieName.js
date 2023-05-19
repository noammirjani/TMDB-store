import {useState} from "react";
import SearchByText from "./SearchByText";
import UserMessage from "../moviesDisplay/UserMessage";

function SearchByMovieName({ setUrl }) {
    const [filterValue, setFilterValue] = useState("");

    function handleClick() {
        if (filterValue.trim()) {
            const name = filterValue.replace(" ", "+");
            const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
            setUrl(url);
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
