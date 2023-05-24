import React, { useState } from "react";
import { Form } from "react-bootstrap";
import UserMessage from "../MoviesDisplay/UserMessage";

function GenresFilterButton({ isError, filterGenre, onChange, data }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
        onChange(event.target.value);
    };

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
