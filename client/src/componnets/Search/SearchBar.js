/**
 * SearchBar Component
 *
 * A component for displaying the search bar and filter buttons.
 */
import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import SearchFilterButton from "./SearchFilterButton";

/**
 * SearchBar Component
 *
 * A component for displaying the search bar and filter buttons.
 *
 * @param {Object} props - Component props.
 * @param {string} props.selectedFilterType - The currently selected filter type.
 * @param {function} props.setSelectedFilterType - Function to set the selected filter type.
 * @param {boolean} props.openHistoryTable - Flag indicating whether the history table is open or not.
 * @param {function} props.setOpenHistoryTable - Function to set the open state of the history table.
 * @returns {JSX.Element} SearchBar component.
 */
function SearchBar(props) {

    /**
     * Handles the view history button click event.
     */
    function handleHistoryClick (){
        props.setSelectedFilterType("");
        props.setOpenHistoryTable(true)
    }

    return (
        <Container>
            <Row className="rounded-pill bg-white bg-opacity-10 text-center my-5 p-2 row-cols-6 justify-content-center">
                <SearchFilterButton
                    selectedFilterType={props.selectedFilterType}
                    setSelectedFilterType={props.setSelectedFilterType}
                    filterName="movie name"
                />
                <SearchFilterButton
                    selectedFilterType={props.selectedFilterType}
                    setSelectedFilterType={props.setSelectedFilterType}
                    filterName="actor name"
                />
                <SearchFilterButton
                    selectedFilterType={props.selectedFilterType}
                    setSelectedFilterType={props.setSelectedFilterType}
                    filterName="date range"
                />
                <SearchFilterButton
                    selectedFilterType={props.selectedFilterType}
                    setSelectedFilterType={props.setSelectedFilterType}
                    filterName="category"
                />
                <Button className={`btn ${props.openHistoryTable === true ? 
                    'btn-danger text-white' : 'bg-transparent btn-outline-danger text-danger'} mx-2 rounded-pill`}
                        onClick={handleHistoryClick}>
                    View History
                </Button>

            </Row>
        </Container>
    );
}

export default SearchBar;