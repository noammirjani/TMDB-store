import {useEffect, useState} from "react";
import axios from "axios";

const useApi = (initialUrl, initialData) => {
    const apiKey ="a746ddd05eb3b2018b0a6c38a7def95d"
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    const defaultFilters=`&page=${page}&include_adult=false&language=en-US`
    const fetchData = async () => {
        if(url === "") {
            setData([])
            return;
        }

        if(url === "/no-data") {
            setData({total_results: 0})
            return;
        }

        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios.get(url+defaultFilters, { headers });
            setData(result.data);

            if(page >= result.data.total_pages)
                setIsError(true)

        } catch (error) {
            if(error.response.status === 422) { //passed the page limit of api
                setPage(page-1)
            }
            else setData([])

            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsError(false)

        if(page === 1) fetchData() // page already sets to 1 and there is different url
        else setPage(1)      // different url but the page is greater than 1

    }, [url]);

    useEffect(() => {
        //if there is an error there is a problem with the previous fetch and we do not
        // need to do another one until the user will want different url/page
        if(isError === false)
            fetchData();
    }, [page]);


    return [{ data, isLoading, isError, page}, setUrl, setPage];
};

export default useApi;