import { Modal, Button } from 'react-bootstrap';
import SvgIcon from "../utils/SvgIcon";

function MovieDetails({ movie }) {
    return (
        <div className="card-body">
            <h2 className="card-title">{movie.original_title}</h2>
            <div className="flex flex-col justify-between">
                <h4>Overview</h4>
                <div className="text-base lg:text-lg text-white mb-2">{movie.overview}</div>
                <div className="text-sm text-white font-medium">
                    <MovieInfoRow label="Release" value={movie.release_date} icon="📅" />
                    <MovieInfoRow label="Rank" value={`${movie.vote_average}/10`} icon="⭐" />
                    <MovieInfoRow label="Vote count" value={`${movie.vote_count} 👓`} />
                    <MovieInfoRow label="Language" value={movie.original_language} icon="🌐" />
                </div>
            </div>
        </div>
    );
}
function MovieInfoRow({ label, value, icon }) {
    return (
        <div className="grid grid-cols-3 gap-x-4 mb-2">
            <div className="col-span-1 lg:text-right">{label}</div>
            <div className="col-span-2">
                {icon && <span>{icon} </span>}
                {value}
            </div>
        </div>
    );
}

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
