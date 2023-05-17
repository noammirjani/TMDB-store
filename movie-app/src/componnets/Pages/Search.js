import SearchBar from "../search/SearchBar";
import React, {useState} from "react";
import MoviesGrid from "../moviesDisplay/MoviesGrid";
import SearchByMovieName from "../search/SearchByMovieName";
import SearchByActor from "../search/SearchByActor";
import {Container} from "react-bootstrap";
import SearchByDates from "../search/SearchByDates";
import SearchByGenres from "../search/SearchByGenres";

function Search(){
    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [filterUrl, setFilterUrl] = useState("");

    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setUrl={setFilterUrl}
            />
            <Container>
                {selectedFilterType==="movie name" && <SearchByMovieName setUrl={setFilterUrl}/>}
                {selectedFilterType==="actor name" && <SearchByActor setUrl={setFilterUrl}/>}
                {selectedFilterType==="date range" && <SearchByDates setUrl={setFilterUrl}/>}
                {selectedFilterType==="category"   && <SearchByGenres setUrl={setFilterUrl}/>}
            </Container>
            <MoviesGrid url={filterUrl}/>
        </>
    );
}

export default Search;