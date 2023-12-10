import React from 'react';

/**
 * SearchFilterButton Component
 *
 * A component for displaying a search filter button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.selectedFilterType - The currently selected filter type.
 * @param {function} props.setSelectedFilterType - The function to set the selected filter type.
 * @param {string} props.filterName - The name of the filter.
 * @returns {JSX.Element} The rendered component.
 */
function SearchFilterButton({ selectedFilterType, setSelectedFilterType, filterName }) {

    /**
     * Handles the button click event.
     */
    const handleClick = () => {
        setSelectedFilterType(filterName);
    };

    return (
        <button
            className={`btn ${selectedFilterType === filterName ? 'btn-danger' : 'btn-outline-danger'} mx-2 rounded-pill`}
            onClick={handleClick}
        >
            by {filterName}
        </button>
    );
}

export default SearchFilterButton;
