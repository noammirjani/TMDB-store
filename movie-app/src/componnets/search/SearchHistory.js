import {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';

function SearchHistory({url}){

    const [prevSearch, setPrevSearch] = useState([]);

    useEffect(() => {
        setPrevSearch([...prevSearch, url]);
    }, [url]);

    useEffect(() => {
        if (url !== "") buildPrevSearch();
    }, [prevSearch]);

    function buildPrevSearch() {
        console.log("At build serach", prevSearch);
        // const searches = prevSearch.map((search,index) => (
        //     <Dropdown.Item key={index} movie={movie}/>
        // ));
        // setCards(cards);
    }

    // const rows = rowsData.map((data, index) => {
    //
    //     // Map over the titles array to create an array of td elements for each cell in the row
    //     const cells = titles.map((title) => (
    //         <td key={title}>{data[title]}</td>
    //     ));
    //     return <tr key={index} className="fw-bolder fs-6">{cells}</tr>;
    // });

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Your Search</th>
                    <th>Search</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                <tbody>{rows}</tbody>
            </Table>
        </>
    );
}

export default SearchHistory;