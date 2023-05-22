import React from "react";
import { Button } from "react-bootstrap";
import { useCartDispatch } from '../Context/CartProvider';

function CartProduct({ movie, index}) {

    const imageUrlPrefix = "https://image.tmdb.org/t/p/w500";
    let movieImage = movie.movie.poster_path !== null ? imageUrlPrefix + movie.movie.poster_path : '/assets/unknowen.png';
    const productIndex = index;
    const dispatch = useCartDispatch();

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={movieImage} className="img-fluid rounded-start" alt="Image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{movie.movie.title}</h5>
                        <Button variant="danger" onClick={() => {
                                dispatch({
                                type: 'remove',
                                removeIndex : productIndex});
                        }}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartProduct;