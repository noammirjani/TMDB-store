import {useState} from "react";
// import useApi from "../hooks/UseApi";
import SearchByText from "./SearchByText";


function SearchByActor({ setUrl }) {
    const key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ2ZGRkMDVlYjNiMjAxOGIwYTZjMzhhN2RlZjk1ZCIsInN1YiI6IjY0NThlMjdjMWI3MGFlMDE0NWVkNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w46933noO_o7Ch2z1y0ogBxrkuC5WlS14o11ltrZ2sY";
    const headers = {'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json'}
    const [filterValue, setFilterValue] = useState("");
    // const { data:actors, setUrl: setApiUrl, error} = useApi("", [], headers);

    function handleClick() {

        if (filterValue.trim()) {
            let name = filterValue.replace(' ', '+');
            let url = `https://api.themoviedb.org/3/search/person?query=${name}&&page=1&include_adult=false&language=en-US`;
            fetch(url, {headers})
                .then(handleResponse)
                .then(handleJson)
                .then((actor) => {
                    setUrl(`http://api.themoviedb.org/3/discover/movie?with_cast=${actor.results[0].id}`)
                })
                .catch(handleError);
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

    return ( <>
            <SearchByText onChange={setFilterValue} onClick={handleClick} placeholder="actor"/>
        </>
    );
}

export default SearchByActor;

// if (filterValue.trim()) {
//     const name = filterValue.replace(" ", "+");
//
//     if (!name.match(/^[A-Za-z\s]+$/)) {
//         console.log("Invalid name");
//         return;
//     }
//     const url = `https://api.themoviedb.org/3/search/person?query=${name}&page=1&include_adult=false&language=en-US`;
//     await setApiUrl(url)
//     if (actors) {
//         console.log(actors)
//         const actor = actors.reduce((prevActor, currentActor) => {
//             return currentActor.popularity > prevActor.popularity ? currentActor : prevActor;
//         });
//
//         setUrl(`http://api.themoviedb.org/3/discover/movie?with_cast=${actor.id}`);
//     }
// }