import React from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import UserMessage from "../MoviesDisplay/UserMessage";


/**
 * SearchHistory Component
 *
 * A component for displaying the search history table.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.searchesData - The array of search data.
 * @param {function} props.handleReRunSearch - The function to handle re-running a search.
 * @param {function} props.handleRemoveRow - The function to handle removing a search row.
 * @param {function} props.handleDeleteAll - The function to handle removing all search rows.
 * @param {boolean} props.setOpenHistoryTable - The function to toggle the visibility of the search history table.
 * @returns {JSX.Element} The rendered component.
 */
function SearchHistory({ searchesData, handleReRunSearch, handleRemoveRow, handleDeleteAll, setOpenHistoryTable }) {

    const titles = ['Your Search', 'Search', 'Remove'];
    const userInfo = "There are no previous searches";

    // build the row of the titles
    const titleRows = titles.map((title, index) => (
        <th key={index} className="text-nowrap">
            {title}
        </th>
    ));


    // build the content of the table
    const rows = searchesData.map((data, index) => {
        const cells = titles.map((title, cellIndex) => {
            if (title === 'Search') {
                return (
                    <td key={title}>
                        <Button variant="success" onClick={() => handleReRunSearch(index)}>
                            Search
                        </Button>
                    </td>
                );
            } else if (title === 'Remove') {
                return (
                    <td key={title}>
                        <Button variant="danger" onClick={() => handleRemoveRow(index)}>
                            Remove
                        </Button>
                    </td>
                );
            }
            return <td key={cellIndex}>{data.value}</td>;
        });
        return <tr key={`${index}`} className="fw-bolder fs-6">{cells}</tr>;
    });


    return (
        <Modal contentClassName="bg-dark" size="xl" show={true} centered>
            <Modal.Body>
                {searchesData.length > 0 &&
                    <Container>
                        <Table striped bordered hover variant="dark" className={`text-center`}>
                            <thead>
                            <tr>{titleRows}</tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </Table>
                    </Container>}
                {searchesData.length === 0 && <UserMessage userInfo={userInfo} isAlert={false} />}
            </Modal.Body>
            <Modal.Footer>
                <div>{searchesData.length > 0 &&
                    <Button variant="danger" onClick={handleDeleteAll}>
                        Remove All Searches
                    </Button>}
                </div>
                <div>
                    <Button variant="secondary" onClick={() => setOpenHistoryTable(false)}>
                        Close
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default SearchHistory;