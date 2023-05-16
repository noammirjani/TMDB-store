import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchFilterButton from "../search/searchFilterButton";

function SearchBar({ selectedFilterType, setSelectedFilterType}) {
    return (
        <Container>
            <Row className="rounded-pill bg-white bg-opacity-10 text-center my-5 p-2 row-cols-4 justify-content-center">
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
            </Row>
        </Container>
    );
}

export default SearchBar;