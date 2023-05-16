import {useEffect, useState} from "react";
import axios from "axios";

const useApi = (initialUrl, initialData) => {

    const apiKey ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ2ZGRkMDVlYjNiMjAxOGIwYTZjMzhhN2RlZjk1ZCIsInN1YiI6IjY0NThlMjdjMWI3MGFlMDE0NWVkNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w46933noO_o7Ch2z1y0ogBxrkuC5WlS14o11ltrZ2sY"
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    const [data, setData] = useState(initialData); // data to be fetched
    const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(url === "") return;

            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(url, { headers });
                setData(result.data.results); // set data state
                console.log("did the fetch")
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url]); // trigger the effect when url changes

    return [{ data, isLoading, isError }, setUrl];
};

export default useApi;

/**
 * function handleJson(jsonObj) {
 *                 if(jsonObj.results.length == 0) {
 *                     console.log("Empty", jsonObj)
 *                     setCards([])
 *                     setUserInfo(" Not found...🔍")
 *                 }
 *                 else {
 *                     setUserInfo("")
 *                     console.log("The Json returned is ", jsonObj)
 *                     buildMovieCard(jsonObj);
 *                 }
 *             }
 */