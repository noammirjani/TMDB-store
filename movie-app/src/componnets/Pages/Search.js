import SearchBar from "../search/SearchBar";
import React, {useState, useEffect} from "react";
import MoviesGrid from "../moviesDisplay/MoviesGrid";
import SearchByMovieName from "../search/SearchByMovieName";
import SearchByActor from "../search/SearchByActor";
import {Container} from "react-bootstrap";
import SearchByDates from "../search/SearchByDates";
import SearchByGenres from "../search/SearchByGenres";
import SearchHistory from "../search/SearchHistory";

function Search(){

    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [filterUrl, setFilterUrl] = useState("");
    const [openHistoryTable, setOpenHistoryTable] = useState(false);

    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setOpenHistoryTable={setOpenHistoryTable}
                       openHistoryTable={openHistoryTable}
            />
            <Container>
                {selectedFilterType==="movie name" && <SearchByMovieName setUrl={setFilterUrl}/>}
                {selectedFilterType==="actor name" && <SearchByActor     setUrl={setFilterUrl}/>}
                {selectedFilterType==="date range" && <SearchByDates     setUrl={setFilterUrl}/>}
                {selectedFilterType==="category"   && <SearchByGenres    setUrl={setFilterUrl}/>}
            </Container>
            {openHistoryTable && <SearchHistory url={filterUrl} setOpenHistoryTable={setOpenHistoryTable}/>}
            {!openHistoryTable && <MoviesGrid url={filterUrl} />}

        </>
    );
}

export default Search;