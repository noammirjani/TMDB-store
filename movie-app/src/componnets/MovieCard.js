import React from "react";
import {Col} from 'react-bootstrap';

function MovieCard ({movie}) {

    const movieData = movie;
    const price = 3.99;
    const imageUrl = "https://image.tmdb.org/t/p/w500"

    return(
        <Col>
            <div className="card shadow-sm">
                <img src={imageUrl + movie.poster_path} className="bd-placeholder-img card-img-top" width="100%" height="300" alt="Placeholder" />
                <div className="card-body">
                    {/*<p className="card-text" ></p>*/}
                    <h5 className={`card-title ${'text-uppercase font-weight-bold text-center'} ${'letter-spacing-2 '}`}>{movie.title}</h5>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-cart3" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                </svg>

                            </button>
                            <button type="button" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"></path>
                                </svg>

                            </button>
                        </div>
                        <small className="text-body-secondary">{price+"$"}</small>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default MovieCard;