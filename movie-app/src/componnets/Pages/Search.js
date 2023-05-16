import SearchBar from "../search/SearchBar";
import React, {useState} from "react";
import MoviesGrid from "../moviesDisplay/MoviesGrid";
import SearchByMovieName from "../search/SearchByMovieName";
import SearchByActor from "../search/SearchByActor";

function Search(){
    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [filterUrl, setFilterUrl] = useState("");

    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setUrl={setFilterUrl}
            />
            {selectedFilterType==="movie name" && <SearchByMovieName setUrl={setFilterUrl}/>}
            {selectedFilterType==="actor name" && <SearchByActor setUrl={setFilterUrl}/>}
            {/*{selectedFilterType==="date range" && <SearchByDates />}*/}
            <MoviesGrid url={filterUrl}/>
        </>
    );
}

export default Search;