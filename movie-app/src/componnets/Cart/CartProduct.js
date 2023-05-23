import React from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import { useCartDispatch } from '../Context/CartProvider';
import SvgIcon from "../utils/SvgIcon";

function CartProduct({ movie, index }) {
    const imageUrlPrefix = "https://image.tmdb.org/t/p/w500";
    let movieImage =
        movie.movie.poster_path !== null
            ? imageUrlPrefix + movie.movie.poster_path
            : '/assets/unknowen.png';
    const productIndex = index;
    const dispatch = useCartDispatch();

    const removeMovieBtn = () => {
        return  <Button
            variant="primary"
            onClick={() => {dispatch({type: 'remove', removeIndex: productIndex});}}>
            <SvgIcon name={"remove"} size={16} />
        </Button>
    }

    return (
        <Card className="card mb-3" style={{ maxWidth: '540px' }}>
            <Row className="row g-0 align-items-center">
                <Col className="col-md-4">
                    <img src={movieImage} className="img-fluid rounded-start h-100" alt="Image" />
                </Col>
                <Col className="col-md-8">
                    <Card.Body className="card-body">
                        <Container className="d-flex flex-column h-100  justify-content-center">
                            <h5 className="card-title text-center">{movie.movie.title}</h5>
                            <div className="text-center">{removeMovieBtn()} </div>
                            <h6>  3.99$</h6>
                        </Container>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartProduct;
