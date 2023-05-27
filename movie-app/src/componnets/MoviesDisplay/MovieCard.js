/**
 * MovieCard Component
 *
 * A component that represents a movie card in the movie grid.
 * It displays the movie image, title, price, and provides options to add to cart and view details.
 */
import React, {useState} from "react";
import {Col} from 'react-bootstrap';
import '../../styles/MovieGrid.css'
import CardExtend from "./CardExtend";
import SvgIcon from "../Utils/SvgIcon";
import { useCartDispatch } from '../Context/CartProvider';


/**
 * MovieCard Component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.movie - The movie object containing details.
 * @returns {JSX.Element} The rendered component.
 */
function MovieCard ({movie}) {

    const [showModal, setShowModal] = useState(false);
    const price = 3.99;
    const imageUrlPrefix = "https://image.tmdb.org/t/p/w500";
    let   movieImage = movie.poster_path !== null ? imageUrlPrefix + movie.poster_path : '/assets/unknowen.png';
    const dispatch = useCartDispatch();


    return(
        <>
            <Col>
                <div className="card card-hover bg-dark text-white shadow-sm justify-content-center">
                    <img src={movieImage} className="bd-placeholder-img card-img-top img" alt="Placeholder" />
                    <div className="card-body custom-card-body text-center">
                        <p className={`card-row row card-title text-uppercase fs-6 font-weight-bold justify-content-center 
                                   letter-spacing-2 text-wrap`}>{movie.title}</p>
                        <div className="d-flex justify-content-between align-items-center" >
                            <div className="btn-group">
                                <button type="button" className="btn btn-success"
                                onClick={()=>{
                                    dispatch({
                                        type: 'addItem',
                                        movie : movie,
                                        dispatch: dispatch
                                    });
                                }}
                                >
                                    <SvgIcon name={"addToCart"} size={16}/>
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                                    <SvgIcon name={"extend"} size={16}/>
                                </button>
                                {showModal && <CardExtend movieImage={movieImage} movie={movie} showModal={showModal} onClose={setShowModal}/>}
                            </div>
                            <small className="text-white">{price+"$"}</small>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default MovieCard;