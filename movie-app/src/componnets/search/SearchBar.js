import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import SearchFilterButton from "../search/SearchFilterButton";

function SearchBar({ selectedFilterType, setSelectedFilterType, setOpenHistoryTable, openHistoryTable}) {

    function handleHistoryClick (){
        setSelectedFilterType("");
        setOpenHistoryTable(!openHistoryTable)
    }

    return (
        <Container>
            <Row className="rounded-pill bg-white bg-opacity-10 text-center my-5 p-2 row-cols-6 justify-content-center">
                <SearchFilterButton
                    selectedFilterType={selectedFilterType}
                    setSelectedFilterType={setSelectedFilterType}
                    filterName="movie name"
                />
                <SearchFilterButton
                    selectedFilterType={selectedFilterType}
                    setSelectedFilterType={setSelectedFilterType}
                    filterName="actor name"
                />
                <SearchFilterButton
                    selectedFilterType={selectedFilterType}
                    setSelectedFilterType={setSelectedFilterType}
                    filterName="date range"
                />
                <SearchFilterButton
                    selectedFilterType={selectedFilterType}
                    setSelectedFilterType={setSelectedFilterType}
                    filterName="category"
                />
                <Button className={`btn ${openHistoryTable === true ? 'btn-danger text-white' : 'bg-transparent btn-outline-danger text-danger'} mx-2 rounded-pill`}
                         onClick={handleHistoryClick}>
                    View History
                </Button>

            </Row>
        </Container>
    );
}

export default SearchBar;