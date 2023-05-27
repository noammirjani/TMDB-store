import {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {fetchRequest} from "../Utils/ServerFetchRequest"
import UserMessage from "../MoviesDisplay/UserMessage";


const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

/**
 * CartProvider component manages the state and actions related to the cart.
 *
 * @param {object} children - The child components to be wrapped by the CartProvider.
 * @returns {JSX.Element} The CartProvider component.
 */
export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, [])
    const [error, setError] = useState('');

    useEffect(() => {
        const initializeCart = async () => {
            try {
                const data = await fetchRequest('GET', { url: '/api/getCart' });
                dispatch({ type: 'initialize', cart: data });
            } catch (error) {
                setError(error.message);
            }
        };
        initializeCart();
    }, []);


    return (
        <CartContext.Provider value={cart}>
            {error && <UserMessage userInfo={error} isAlert={true} />}
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

/**
 * Custom hook to access the cart state.
 *
 * @returns {Array} The cart state.
 */
export function useCart() {
    return useContext(CartContext);
}

/**
 * Custom hook to access the cart dispatch function.
 *
 * @returns {Function} The cart dispatch function.
 */
export function useCartDispatch() {
    return useContext(CartDispatchContext);
}


/**
 * Fetches the updated cart data from the server and dispatches the corresponding action.
 *
 * @param {string} request - The HTTP method for the request (POST or DELETE).
 * @param {string} url - The URL for the API request.
 * @param {object} body - The request body data.
 * @param {Function} setData - The dispatch function to update the cart state.
 */
const fetchUpdate = (request,  url, body, setData) => {
    const axiosData = {url: url, data:body}
    fetchRequest(request, axiosData)
        .then(() => {setData({type:'update', dispatch:setData})})
        .catch((error) => {console.log(error.message, error.code);});
}

/**
 * Reducer function for managing the cart state.
 *
 * @param {Array} cart - The current cart state.
 * @param {object} action - The action object describing the state update.
 * @returns {Array} The updated cart state.
 * @throws {Error} If an unknown action type is encountered.
 */
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
/**
 * Builds the cart product object from the movie data.
 *
 * @param {object} movie - The movie data.
 * @returns {object} The cart product object.
 */
function buildCartProduct(movie){
    return {
        movieId: movie.id,
        movieImage: movie.poster_path,
        movieTitle: movie.title,
        movieReleaseDate: movie.release_date,
        moviePrice: 3.99
    }
}