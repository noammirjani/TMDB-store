import { Modal, Button } from 'react-bootstrap';
import SvgIcon from "../utils/SvgIcon";
import MovieDetails from "./MovieDetails";


function CardExtend({ movieImage, movie, showModal, onClose }) {
    return (
        <Modal contentClassName="bg-dark" size="xl" show={showModal} onHide={() => onClose(false)} centered>
            <Modal.Body>
                <div className="card bg-dark text-white mb-3" style={{ maxWidth: '1500px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={movieImage} className="img-fluid rounded-start" alt="imageExtend" />
                        </div>
                        <div className="col-md-8">
                            <MovieDetails movie={movie} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">
                    <SvgIcon name="addToCart" size={25}/>
                </Button>
                <Button variant="danger" onClick={() => onClose(false)}> Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CardExtend;
