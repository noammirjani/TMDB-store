import { Modal, Button } from 'react-bootstrap';
import React from "react";

function CardExtend({ movieImage, movie,showModal, onClose }) {

    return (
        <>
            <Modal contentClassName="bg-dark" size="xl" show={showModal} onHide={() => onClose(false)} centered>

                <Modal.Body>
                    <div className="card bg-dark text-white mb-3" style={{maxWidth: '1500px'}}>
                    <div className="row g-0">
                            <div className="col-md-4">
                                <img src={ movieImage} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{movie.original_title} </h2>
                                    {/*<span className="tag release_date">Release date: {movie.release_date}</span>*/}

                                    <div className=" flex flex-col justify-between">
                                        <div className="grid lg:grid-cols-12 gap-y-4 gap-x-10">
                                            <h4>Overview</h4>
                                            <div className="col-span-5 text-base lg:text-lg text-white mb-2">{movie.overview} </div>
                                            <div className="col-span-3 text-sm text-white font-medium">
                                                <div className="grid grid-cols-3 gap-x-4 mb-2">
                                                    <div className="col-span-1 lg:text-right">Release</div>
                                                    <div className="col-span-2">{movie.release_date} 📅</div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-x-4 mb-2">
                                                    <div className="col-span-1 lg:text-right">Rank</div>
                                                    <div className="col-span-2">{movie.vote_average}/10 ⭐</div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-x-4 mb-2">
                                                    <div className="col-span-1 lg:text-right">Vote count</div>
                                                    <div className="col-span-2">{movie.vote_count} 👓</div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-x-4 mb-2">
                                                    <div className="col-span-1 lg:text-right">Vote count</div>
                                                    <div className="col-span-2">Language: {movie.original_language} 🌐</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cart3" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                    </Button>
                    <Button variant="danger" onClick={() => onClose(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardExtend;
