import {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import { Container} from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

function SearchHistory({url, setOpenHistoryTable}){

    const [prevSearch, setPrevSearch] = useState([]);
    const titles = ["Your Search", "Search", "Remove"];

    useEffect(() => {
        setPrevSearch([...prevSearch, url]);
    }, [url]);

    useEffect(() => {
        if (url !== "") console.log("New Array: ", prevSearch);
    }, [prevSearch]);

    const titleRows = titles.map((title, index) => <th key={index} className="text-nowrap">{title}</th>);

    // const removeRow = (index) => {
    //     setSearchHistory(prevHistory => {
    //         const newHistory = [...prevHistory];
    //         newHistory.splice(index, 1);
    //         return newHistory;
    //     });
    // };

    // const rows = prevSearch.map((data, index) => {
    //     console.log("At build serach", prevSearch);
    //     // Map over the titles array to create an array of td elements for each cell in the row
    //     const cells = titles.map((title, cellIndex) => {
    //         if (cellIndex === titles.length - 1) {
    //             return (
    //                 <td key={title}>
    //                     <Button variant="danger" onClick={() => removeRow(index)}>Remove</Button>
    //                 </td>
    //             );
    //         }
    //         return <td key={title}>{data[title]}</td>;
    //     });
    //     return <tr key={index} className="fw-bolder fs-6">{cells}</tr>;
    // });

    return (

        <Modal contentClassName="bg-dark" size="xl" show={true}  centered>
            <Modal.Body>
                <Container>
                    <Table striped bordered hover variant="dark" className={`text-center`}>
                        <thead>
                        <tr>{titleRows}</tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <Button variant="danger" onClick={() => setPrevSearch([])}> Remove All Searches</Button>
                </div>
                <div>
                    <Button variant="danger" onClick={() => setOpenHistoryTable(false)}> Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchHistory;