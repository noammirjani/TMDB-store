
/**
 * Search Component
 *
 * A component that handles the search functionality and displays the search bar,
 * filter options, search history, and search results.
 */
import SearchBar from "../Search/SearchBar";
import React, {useState } from "react";
import MoviesGrid from "../MoviesDisplay/MoviesGrid";
import SearchByMovieName from "../Search/SearchByMovieName";
import SearchByActor from "../Search/SearchByActor";
import {Container} from "react-bootstrap";
import SearchByDates from "../Search/SearchByDates";
import SearchByGenres from "../Search/SearchByGenres";
import SearchHistory from "../Search/SearchHistory";


/**
 * Search Component
 *
 * @returns {JSX.Element} The rendered component.
 *//**
 * Search Component
 *
 * A component that handles the search functionality and displays the search bar,
 * filter options, search history, and search results.
 *
 * @returns {JSX.Element} The rendered component.
 */
function Search(){

    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [historyModal, setHistoryModal] = useState(false);
    const [filterUrl, setFilterUrl] = useState("");
    const [searchValue, setSearchValue] = useState("");


    return(
        <>
            <SearchBar selectedFilterType={selectedFilterType}
                       setSelectedFilterType={setSelectedFilterType}
                       setOpenHistoryTable={ setHistoryModal}
                       openHistoryTable={historyModal}
            />
            <Container>
                {selectedFilterType==="movie name" && <SearchByMovieName setUrl={setFilterUrl} setPrevSearchInput={setSearchValue}/>}
                {selectedFilterType==="actor name" && <SearchByActor     setUrl={setFilterUrl} setPrevSearchInput={setSearchValue}/>}
                {selectedFilterType==="date range" && <SearchByDates     setUrl={setFilterUrl}/>}
                {selectedFilterType==="category"   && <SearchByGenres    setUrl={setFilterUrl}/>}
            </Container>
            <SearchHistory modal={historyModal} setUrl={setFilterUrl} setModal={setHistoryModal}
                           data={{filterUrl, searchValue, selectedFilterType}}/>
            {!historyModal && <MoviesGrid url={filterUrl} />}

        </>
    );
}

export default Search;