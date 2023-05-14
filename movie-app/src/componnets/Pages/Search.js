import SearchBar from "../search/SearchBar";
import {useState} from "react";
import MoviesGrid from "../movies/MoviesGrid";

function Search(){
    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [filterUrl, setFilterUrl] = useState("");


    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
            />
            <MoviesGrid url={filterUrl}/>
        </>
    );
}

export default Search;