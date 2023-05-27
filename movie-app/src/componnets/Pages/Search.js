/**
 * Search Component
 *
 * A component that handles the search functionality and displays the search bar,
 * filter options, search history, and search results.
 */
import SearchBar from "../Search/SearchBar";
import React, {useState, useEffect, useReducer } from "react";
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
 */
function Search(){

    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [openHistoryTable, setOpenHistoryTable] = useState(false);
    const [filterUrl, setFilterUrl] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [searchesData, dispatch] = useReducer(searchReducer, []);

    // hook for search url changing
    useEffect(() => {
        if (searchValue !== "" && filterUrl !== "" && !searchesData.some(search => search.value === searchValue)) {
            handleAddSearch();
        }
    }, [filterUrl, searchValue]);

    /**
     * Handles re-running a search from the search history.
     *
     * @param {number} index - The index of the search in the search history.
     */
    function handleReRunSearch(index) {
        setOpenHistoryTable(false);
        setFilterUrl(searchesData[index].url);
    }


    /**
     * Handles adding a search to the search history.
     */
    function handleAddSearch() {
        dispatch({
            type: 'added',
        });
    }

    /**
     * Handles removing a search from the search history.
     *
     * @param {number} index - The index of the search in the search history.
     */
    function handleRemoveRow(index) {
        dispatch({
            type: 'remove',
            removeIndex : index,
        });
    }

    /**
     * Handles deleting all searches from the search history.
     */
    function handleDeleteAll() {
        dispatch({
            type: 'delete',
        });
    }


    /**
     * Search reducer function.
     *
     * @param {Array} searchesData - The current search history data.
     * @param {Object} action - The action object describing the action to be performed.
     * @returns {Array} The updated search history data.
     */
    function searchReducer(searchesData, action) {
        switch (action.type) {
            case 'added': {
                return [...searchesData, { url: filterUrl, value: searchValue }];
            }
            case 'remove': {
                return searchesData.filter((search) => searchesData.indexOf(search) !== action.removeIndex);
            }
            case 'delete': {
                return [];
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }



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
            {openHistoryTable && <SearchHistory searchesData={searchesData}
                                                handleReRunSearch={handleReRunSearch}
                                                handleRemoveRow={handleRemoveRow}
                                                handleDeleteAll={handleDeleteAll}
                                                setOpenHistoryTable={setOpenHistoryTable} />}
            {!openHistoryTable && <MoviesGrid url={filterUrl} />}

        </>
    );
}

export default Search;