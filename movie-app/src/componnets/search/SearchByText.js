import {Row} from "react-bootstrap";
import '../../styles/Search.css'
import {useState} from "react";

function SearchByText({filterName, setUrl}){

    const [filterValue, setFilterVal] = useState("");

    function handleChange(event){
        setFilterVal(event.target.value);
    }

    function handleClick(){
        if(filterValue.trim()) {

            if(filterName === 'movie name')
                setUrl(`https://api.themoviedb.org/3/search/movie?query=${filterValue}`)

            if(filterName === 'actor name')
               setUrl(`https://api.themoviedb.org/3/person/${filterValue}/movie_credits`)
        }
    }

    return(
        <Row className="container-search  py-5 ">
                <div className="search-bar">
                    <input type="text" onChange={handleChange} className="input placeholder text-white bg-info" placeholder="&nbsp;"/>
                    <span className="label">Search by {filterName}</span>
                    <span className="highlight"></span>
                    <button className="search-btn" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
        </Row>
);
}

export default SearchByText;