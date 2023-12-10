/**
 * GenresFilterButton Component
 *
 * A dropdown button component for selecting a genre filter.
 */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import UserMessage from "../MoviesDisplay/UserMessage";


/**
 * GenresFilterButton Component
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isError - Indicates if there was an error in fetching genres data.
 * @param {number} props.filterGenre - The currently selected genre filter.
 * @param {function} props.onChange - The function to handle the genre filter change.
 * @param {Object} props.data - The genres data.
 * @returns {JSX.Element} The rendered component.
 */
function GenresFilterButton({ isError, filterGenre, onChange, data }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    /**
     * Handles the dropdown button click event.
     *
     * @param {Object} event - The event object.
     */
    const handleClick = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
        onChange(event.target.value);
    };

    /**
     * Retrieves the options for the dropdown button.
     *
     * @returns {JSX.Element[]} The options JSX elements.
     */
    const getOptions = () => {
        return data?.genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
                {genre.name}
            </option>
        ));
    };

    return (
        <div>
            <Form.Select
                className="text-center rounded-pill form-select-sm"
                aria-label="select"
                onChange={handleClick}
                value={filterGenre !== -1 ? filterGenre : -1}
                required
            >
                <option value={-1} disabled>Choose Genre</option>
                {data && data.genres && getOptions()}
                {isError && <option><UserMessage userInfo="Cannot get genres" isAlert={true}/></option>}
            </Form.Select>
        </div>
    );
}

export default GenresFilterButton;
