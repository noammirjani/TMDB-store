import SearchBar from "../search/SearchBar";
import {useState} from "react";
import MoviesGrid from "../moviesDisplay/MoviesGrid";

function Search(){
    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [filterUrl, setFilterUrl] = useState("");


    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setUrl={setFilterUrl}
            />
            <MoviesGrid url={filterUrl}/>
        </>
    );
}

export default Search;