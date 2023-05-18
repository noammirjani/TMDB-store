import {useEffect, useState} from "react";
import axios from "axios";

const useApi = (initialUrl, initialData) => {

    const apiKey ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQ2ZGRkMDVlYjNiMjAxOGIwYTZjMzhhN2RlZjk1ZCIsInN1YiI6IjY0NThlMjdjMWI3MGFlMDE0NWVkNzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w46933noO_o7Ch2z1y0ogBxrkuC5WlS14o11ltrZ2sY"
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };
    const defaultFilters="&page=1&include_adult=false&language=en-US"

    const [data, setData] = useState(initialData); // data to be fetched
    const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(url === "") {         //no search
                setData({})
                return;
            }

            if(url === " ") {
                setData({total_results: 0})
                return;
            }

            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(url+defaultFilters, { headers });
                setData(result.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url]);



    return [{ data, isLoading, isError,  }, setUrl];
};

export default useApi;