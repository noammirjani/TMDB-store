import {Button, Container, Table} from "react-bootstrap";

function SearchHistoryTable({ history, handleReRunSearch, handleRemoveRow }) {
    const titles = ['Your Search','Type', 'Search', 'Remove'];

    // Build the row of the titles
    const titleRows = titles.map((title, index) => (
        <th key={index} className="text-nowrap">
            {title}
        </th>
    ));

    // Build the content of the table
    const rows = history.map((data, index) => {
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
            else if (title === 'Type'){
                return <td key={cellIndex}>{data.type}</td>;
            }
            return <td key={cellIndex}>{data.value}</td>;
        });
        return <tr key={`${index}`} className="fw-bolder fs-6">{cells}</tr>;
    });

    return (
        <Container>
            <Table striped bordered hover variant="dark" className={`text-center`}>
                <thead>
                    <tr>{titleRows}</tr>
                </thead>
                <tbody>{rows}</tbody>
        </Table>
        </Container>
    );
}

export default SearchHistoryTable;
