import { Modal, Button } from 'react-bootstrap';

function CardExtend({showModal,onClose}){

    return(
        <>
            <Modal show={showModal} onHide={() => onClose(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onClose(false)}>
                        Close
                    </Button>
                    {/*<Button variant="primary" onClick={props.handleSave}>*/}
                    {/*    Save Changes*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardExtend;