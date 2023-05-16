import {Row} from "react-bootstrap";
import '../../styles/Search.css'
import {useState} from "react";


function SearchByText({filterName, setUrl}){
    const search = "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    const [filterValue, setFilterVal] = useState("");

    function handleChange(event){
        //validation for the input animation - on change delete the whitespaces if there are all the input
        if(event.target.value.trim() === "")
            event.target.value = event.target.value.trim()
        setFilterVal(event.target.value);
    }

    function handleClick() {
        const key ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ2ZGRkMDVlYjNiMjAxOGIwYTZjMzhhN2RlZjk1ZCIsInN1YiI6IjY0NThlMjdjMWI3MGFlMDE0NWVkNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w46933noO_o7Ch2z1y0ogBxrkuC5WlS14o11ltrZ2sY"

        if (filterValue.trim()) {
            let name = filterValue.replace(' ', '+');

            if (filterName === 'movie name')
                setUrl(`https://api.themoviedb.org/3/search/movie?query=${name}`);

            if (filterName === 'actor name') {
                const apiKey = 'YOUR_API_KEY'; // Replace with your TMDb API key

                let url = `https://api.themoviedb.org/3/search/person?query=${name}&&page=1&include_adult=false&language=en-US`;

                fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${key}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(handleResponse)
                    .then(handleJson)
                    .then((actor) => {
                        setUrl(`http://api.themoviedb.org/3/discover/movie?with_cast=${actor.results[0].id}`)
                    })
                    .catch(handleError);
            }
        }
    }

    function handleResponse(res) {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
    }

    function handleJson(jsonObj) {
        console.log("ACTOR JSON ", jsonObj)
        return jsonObj
    }

    function handleError(error) {
        console.log(error.toString())
    }

    return(
        <Row className="container-search  py-5 ">
                <div className="search-bar">
                    <input type="text" required onChange={handleChange} className="input placeholder text-white bg-info" placeholder="&nbsp;"/>
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