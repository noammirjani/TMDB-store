import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchFilterButton from "../search/searchFilterButton";

function SearchBar({ selectedFilterType, setSelectedFilterType}) {
    return (
        <Container>
            <Row className="rounded-pill bg-white bg-opacity-10 text-center my-5 p-2 row-cols-5 justify-content-center">
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

            </Row>
        </Container>
    );
}

export default SearchBar;