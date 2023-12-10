import '../../styles/Search.css';
import { Row } from "react-bootstrap";
import SvgIcon from "../Utils/SvgIcon";

/**
 * SearchByText Component
 *
 * A component for searching by text input.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onChange - The function to handle input change.
 * @param {function} props.onClick - The function to handle button click.
 * @param {string} props.placeholder - The input placeholder text.
 * @returns {JSX.Element} The rendered component.
 */
function SearchByText({ onChange, onClick, placeholder }) {

    /**
     * Handles the input change event.
     * @param {Object} event - The input change event.
     */
    function handleChange(event) {
        const value = event.target.value.trim();
        onChange(value);
    }

    return (
        <Row className="container container-search">
            <div className="search-bar">
                <input type="text" onChange={handleChange}  placeholder="&nbsp;"
                       className="input placeholder text-white bg-info" required
                />
                <span className="label">Search by {placeholder}</span>
                <span className="highlight"></span>

                <button className="search-btn" onClick={onClick}>
                    <SvgIcon size={16} name={"search"} />
                </button>
            </div>
        </Row>
    );
}

export default SearchByText;