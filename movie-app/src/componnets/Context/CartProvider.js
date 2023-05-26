import {createContext, useContext, useEffect, useReducer, useState} from 'react';
import axios from "axios";


const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer( cartReducer, [])

    useEffect(() => {
        const initializeCart = async () => {
            const data = await fetchGetCart({ url: '/api/getCart' });
            dispatch({ type: 'initialize', cart: data });
        };
        initializeCart();
    }, []);


    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

const fetchGetCart = async (httpRequest) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.get(httpRequest.url, { headers });
        return response.data;
    } catch (error) {
        console.log('ERROR',error);
        console.log(error.message, error.code);
        return [];
    }
};


const fetchPostToCart = async (httpRequest) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.post(httpRequest.url, httpRequest.data, { headers });
        console.log( response.data);
    } catch (error) {
        console.log(error.message, error.code);
    }
};
function cartReducer(cart, action, dispatch) {
    switch (action.type) {
        case 'initialize': {
            return action.cart;
        }
        case 'addItem': {
            const movieToAdd = buildCartProduct(action.movie);
            fetchPostToCart({ url: '/api/addItem', data: movieToAdd })
                .then(() => {
                    fetchGetCart({ url: '/api/getCart' })
                        .then((res) => {
                            action.dispatch({ type: 'initialize', cart: res });
                        })
                        .catch((error) => {
                            console.log(error.message, error.code);
                        });
                })
                .catch((error) => {
                    console.log(error.message, error.code);
                });
            return cart;
        }
        case 'removeItem': {
            const movieToClear = buildCartProduct(action.movie);
            fetchPostToCart({ url: '/api/removeItem', data: movieToClear })
                .then(() => {
                    fetchGetCart({ url: '/api/getCart' })
                        .then((res) => {
                            action.dispatch({ type: 'initialize', cart: res });
                        })
                        .catch((error) => {
                            console.log(error.message, error.code);
                        });
                })
                .catch((error) => {
                    console.log(error.message, error.code);
                });
            return cart;
        }
        case 'clear': {
            // fetchPostToCart({ url: '/api/clearCart', data: null })
            //     .then(() => {
            //         fetchGetCart({ url: '/api/getCart' })
            //             .then((res) => {
            //                 action.dispatch({ type: 'initialize', cart: res });
            //             })
            //             .catch((error) => {
            //                 console.log(error.message, error.code);
            //             });
            //     })
            //     .catch((error) => {
            //         console.log(error.message, error.code);
            //     });
            return cart;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


function buildCartProduct(movie){
    return {
    {console.log(movie)}
        movieId: movie.id,
        movieImage: movie.poster_path,
        movieTitle: movie.title,
        movieReleaseDate: movie.release_date,
        moviePrice: 3.99
    }
}