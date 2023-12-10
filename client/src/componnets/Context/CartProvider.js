import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import UserMessage from "../MoviesDisplay/UserMessage";
import {fetchRequest} from "../Utils/ServerFetchRequest"
import ToastMsg from "../Utils/ToastMsg";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

// reducer to handle fetching data - returns the
// fix object by the state of the fetch
function cartReducer(state, action) {
    switch (action.type) {
        case 'FETCH_CART_SUCCESS':
            // no error or loading, cart has new data
            return { error: false, loading: false, cart: action.payload };
        case 'FETCH_CART_FAILURE':
            // set the error to the wanted message
            return { ...state, loading: false, error: action.payload };
        case 'UPDATING_CART':
            // set the cart is not ready, still loading
            return { ...state, loading: true };
        default:
            return state;
    }
}

export function CartProvider({ children }) {

    const errMsg = "Server Error! Please check the details at the top of the page";
    const initialState = {cart: [], error: '', loading: true};
    const [state, dispatch] = useReducer(cartReducer, initialState, initialState => initialState);
    const [showToast, setShowToast] = useState(true);

    //hook for init
    useEffect( () => {
        const fetch = async () => {
            await update('GET', {url:'/api/getCart', payload:null});
        }
        fetch().then();
    }, []);


    // fetches the data and base on the response sends to the dispatch to set the attributes
    const update = async(method, payload) => {
        try{
            if(method !== 'GET') await fetchRequest(method, payload);
            const updatedCart = await fetchRequest('GET', {url: 'api/getCart'});
            dispatch({ type: 'FETCH_CART_SUCCESS', payload: updatedCart });
        }
        catch(error){
            setShowToast(true)
            dispatch({type:'FETCH_CART_FAILURE', payload: String(error)})
        }
    }

    // build movie and enter to cart
    const addToCart = async (movie) => {
        const movieToAdd = {
            movieId: movie.id,
            movieImage: movie.poster_path,
            movieTitle: movie.title,
            movieReleaseDate: movie.release_date,
            moviePrice: 3.99,
        };
        await update('POST', {url:'/api/addItem', payload: movieToAdd});
    };

    // gets movie to remove
    const removeFromCart = async (MovieToDelete) => {
        await update('DELETE', {url:'/api/removeItem', payload: MovieToDelete});
    };

    //clears cart
    const clearCart = async () => {
        await update('DELETE', {url:'/api/clearCart', payload:null});
    };

    // get the current cart
    const getCart = async () => {
        await update('GET', {url:'/api/getCart', payload:null});
    }


    return (
        <CartContext.Provider value={state.cart}>
            {state.error && <UserMessage userInfo={state.error} isAlert={true}/>}
            {state.error && <ToastMsg text={errMsg} setMode={setShowToast} mode={showToast} error={true}/>}
            <CartDispatchContext.Provider value={{ addToCart, removeFromCart, clearCart, getCart }}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

//context for cart
export function useCart() {
    return useContext(CartContext);
}


//context for fetching,sets functions
export function useCartDispatch() {
    return useContext(CartDispatchContext);
}