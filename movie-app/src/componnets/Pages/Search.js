import SearchBar from "../search/SearchBar";
import React, {useState, useEffect, useReducer } from "react";
import MoviesGrid from "../moviesDisplay/MoviesGrid";
import SearchByMovieName from "../search/SearchByMovieName";
import SearchByActor from "../search/SearchByActor";
import {Container} from "react-bootstrap";
import SearchByDates from "../search/SearchByDates";
import SearchByGenres from "../search/SearchByGenres";
import SearchHistory from "../search/SearchHistory";


function Search(){

    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [openHistoryTable, setOpenHistoryTable] = useState(false);

    const [filterUrl, setFilterUrl] = useState("");
    const [searchValue, setSearchValue] = useState("");

    // useEffect(() => {
    //     if (searchValue !== "" ) {
    //         setPrevSearchURL((prevSearch) => [...prevSearchURL, filterUrl]);
    //         setPrevSearchInput((prevSearch) => [...prevSearchInput, searchValue]);
    //     }
    // }, [searchValue]);


    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setOpenHistoryTable={setOpenHistoryTable}
                       openHistoryTable={openHistoryTable}
            />
            <Container>
                {selectedFilterType==="movie name" && <SearchByMovieName setUrl={setFilterUrl} setPrevSearchInput={setSearchValue}/>}
                {selectedFilterType==="actor name" && <SearchByActor     setUrl={setFilterUrl} setPrevSearchInput={setSearchValue}/>}
                {selectedFilterType==="date range" && <SearchByDates     setUrl={setFilterUrl}/>}
                {selectedFilterType==="category"   && <SearchByGenres    setUrl={setFilterUrl}/>}
            </Container>
            {openHistoryTable && <SearchHistory filterUrl={filterUrl}
                                                searchValue={searchValue}
                                                setOpenHistoryTable={setOpenHistoryTable} />}
            {!openHistoryTable && <MoviesGrid url={filterUrl} />}

        </>
    );
}

export default Search;