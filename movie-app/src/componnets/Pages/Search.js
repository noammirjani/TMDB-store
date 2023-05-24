import SearchBar from "../Search/SearchBar";
import React, {useState, useEffect, useReducer } from "react";
import MoviesGrid from "../MoviesDisplay/MoviesGrid";
import SearchByMovieName from "../Search/SearchByMovieName";
import SearchByActor from "../Search/SearchByActor";
import {Container} from "react-bootstrap";
import SearchByDates from "../Search/SearchByDates";
import SearchByGenres from "../Search/SearchByGenres";
import SearchHistory from "../Search/SearchHistory";


function Search(){

    const [selectedFilterType, setSelectedFilterType] = useState("movie name");
    const [openHistoryTable, setOpenHistoryTable] = useState(false);
    const [filterUrl, setFilterUrl] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const [searchesData, dispatch] = useReducer(searchReducer, []);

    useEffect(() => {
        if (searchValue !== "" && filterUrl !== "" && !searchesData.some(search => search.value === searchValue)) {
            handleAddSearch();
        }
    }, [filterUrl, searchValue]);

    function handleReRunSearch(index) {
        console.log("want to reseach ",searchesData[index].value);
        setOpenHistoryTable(false);
        setFilterUrl(searchesData[index].url);
    }

    function handleAddSearch() {
        dispatch({
            type: 'added',
        });
    }

    function handleRemoveRow(index) {
        dispatch({
            type: 'remove',
            removeIndex : index,
        });
    }

    function handleDeleteAll() {
        dispatch({
            type: 'delete',
        });
    }


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