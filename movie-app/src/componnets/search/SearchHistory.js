import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import UserMessage from "../moviesDisplay/UserMessage";

function SearchHistory({ searchesData, handleReRunSearch, handleRemoveRow, handleDeleteAll, setOpenHistoryTable }) {

    const titles = ['Your Search', 'Search', 'Remove'];
    const userInfo = "There are no previous searches";

    const titleRows = titles.map((title, index) => (
        <th key={index} className="text-nowrap">
            {title}
        </th>
    ));

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
