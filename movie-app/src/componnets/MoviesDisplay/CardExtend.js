/**
 * CardExtend Component
 *
 * A component that represents an extended card view for a movie.
 * It displays the movie image, details, and provides options to add to cart and close the modal.
 */
import { Modal, Button } from 'react-bootstrap';
import SvgIcon from "../Utils/SvgIcon";
import MovieDetails from "./MovieDetails";
import { useCartDispatch } from '../Context/CartProvider';


/**
 * CardExtend Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.movieImage - The URL of the movie image.
 * @param {Object} props.movie - The movie object containing details.
 * @param {boolean} props.showModal - Flag to control the visibility of the modal.
 * @param {Function} props.onClose - The function to handle modal close event.
 * @returns {JSX.Element} The rendered component.
 */
function CardExtend({ movieImage, movie, showModal, onClose }) {
    const { addToCart } = useCartDispatch();

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
                <Button variant="success"
                        onClick={()=>{addToCart(movie)}}>
                    <SvgIcon name="addToCart" size={25}/>
                </Button>
                <Button variant="danger" onClick={() => onClose(false)}> Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CardExtend;
