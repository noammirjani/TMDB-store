import {createContext, useContext, useEffect, useReducer} from 'react';
// import axios from "axios";
import {fetchRequest} from "../Utils/ServerFetchRequest"


const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, [])

    useEffect(() => {
        const initializeCart = async () => {
            // const data = await fetchRequest('GET', { url: '/api/getCart' })
            // dispatch({ type: 'initialize', cart: data });
            dispatch({ type: 'update', dispatch:dispatch});
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

const fetchUpdate = (request,  url, body, setData) => {
    const axiosData = {url: url, data:body}
    fetchRequest(request, axiosData)
        .then(() => {setData({type:'update', dispatch:setData})})
        .catch((error) => {console.log(error.message, error.code);});
}


function cartReducer(cart, action) {

    switch (action.type) {
        case 'initialize': {
            return action.cart;
        }
        case 'addItem': {
            const movieToAdd = buildCartProduct(action.movie);
            fetchUpdate('POST', '/api/addItem', movieToAdd, action.dispatch)
            return cart;
        }
        case 'removeItem': {
            fetchUpdate('DELETE','/api/removeItem', action.movie, action.dispatch)
             return cart;
        }
        case 'clear': {
            fetchUpdate('DELETE', '/api/clearCart', null, action.dispatch)
            return cart;
        }
        case 'update':{
            fetchRequest('GET', {url: '/api/getCart'})
                .then((res) => {action.dispatch({ type: 'initialize', cart: res }); })
                .catch((error) => { console.log(error.message, error.code); });
            return cart;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function buildCartProduct(movie){
    return {
        movieId: movie.id,
        movieImage: movie.poster_path,
        movieTitle: movie.title,
        movieReleaseDate: movie.release_date,
        moviePrice: 3.99
    }
}