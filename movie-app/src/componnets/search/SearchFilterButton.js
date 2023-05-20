import React from 'react';

function SearchFilterButton({ selectedFilterType, setSelectedFilterType, filterName }) {
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
