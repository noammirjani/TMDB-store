import '../../styles/Search.css';
import { Container } from "react-bootstrap";
import SvgIcon from "../utils/SvgIcon";


function SearchByText({ onChange, onClick, placeholder }) {
    function handleChange(event) {
        const value = event.target.value.trim();
        onChange(value);
    }

    return (
        <Container className="container-search py-5">
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
        </Container>
    );
}

export default SearchByText;