import { Modal, Button } from 'react-bootstrap';

function CardExtend({ movie,showModal, onClose }) {
    return (
        <>
            <Modal show={showModal} onHide={() => onClose(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>movie.original_title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onClose(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardExtend;
