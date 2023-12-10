import {useEffect, useState} from "react";
import axios from "axios";

const useApi = (initialUrl, initialData) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isMorePages, setIsMorePages] = useState(false);
    const [page, setPage] = useState(1);
    const [errorMsg, setErrorMsg] = useState({});

    const defaultFilters=`&page=${page}&include_adult=false&language=en-US`

    //hook over url
    useEffect(() => {
        setIsError(false)
        setIsMorePages(true)
        if(page === 1) fetchData() // page already sets to 1 and there is different url
        else setPage(1)      // different url but the page is greater than 1

    }, [url]);

    // hook over page
    useEffect(() => {
        //if there is an error there is a problem with the previous fetch and we do not
        // need to do another one until the user will want different url/page
        if(isError === false && isMorePages === true)
            fetchData();
    }, [page]);


    const fetchData = async () => {
        // url sets to empty string - cannot do fetch
        if (url === "") {
            setData([])
            return;
        }

        //url sets to rout that signs no need to fetch, return empty movie list
        // this routs is for double fetching from tmdb like for the actors name/ discover by genres...
        if (url === "/no-data") {
            setData({total_results: 0})
            return;
        }

        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios.get(url + defaultFilters, {headers});
            setData(result.data);

            if(page >= result.data.total_pages)
                setIsMorePages(false);
            else
                setIsMorePages(true);

        } catch (error) {

            if(error.response.status === 422) {
                //passed the page limit of api
                setIsMorePages(false)
            }
            else {
                setData([])
                setIsError(true);
                setErrorMsg({code: error.message, msg: error.response.statusText})
            }
        } finally {
            setIsLoading(false);
        }
    }
    return [{ data, isError, errorMsg, page, isMorePages, isLoading}, setUrl,setPage];
};

export default useApi;