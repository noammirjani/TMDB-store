/**
 * CartProvider Component
 *
 * A component that provides cart data and dispatch functions using React context.
 * It initializes the cart, manages cart state, and handles cart actions such as adding, removing, and updating items.
 */
import {createContext, useContext, useEffect, useReducer} from 'react';
import {fetchRequest} from "../Utils/ServerFetchRequest"

// Create cart context
const CartContext = createContext(null);
const CartDispatchContext = createContext(null);


/**
 * CartProvider Component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, [])

    useEffect(() => {
        const initializeCart = async () => {
            // Fetch cart data from server
            const data = await fetchRequest('GET', { url: '/api/getCart' });
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

/**
 * useCart Hook
 *
 * A custom hook to access the cart data from the context.
 *
 * @returns {Array} The cart data.
 */
export function useCart() {
    return useContext(CartContext);
}

/**
 * useCartDispatch Hook
 *
 * A custom hook to access the cart dispatch function from the context.
 *
 * @returns {Function} The cart dispatch function.
 */
export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

/**
 * fetchUpdate Function
 *
 * A helper function that sends a request to the server and updates the data state.
 *
 * @param {string} request - The HTTP request method (e.g., "GET", "POST", "DELETE").
 * @param {string} url - The URL for the server request.
 * @param {Object} body - The request body.
 * @param {Function} setData - The function to update the data state.
 */
const fetchUpdate = (request,  url, body, setData) => {
    const axiosData = {url: url, data:body}
    fetchRequest(request, axiosData)
        .then(() => {setData({type:'update', dispatch:setData})})
        .catch((error) => {console.log(error.message, error.code);});
}


/**
 * Cart Reducer
 *
 * A reducer function that handles cart actions and updates the cart state accordingly.
 *
 * @param {Array} cart - The current cart state.
 * @param {Object} action - The cart action.
 * @returns {Array} The updated cart state.
 */
function cartReducer(cart, action) {

    switch (action.type) {
        case 'initialize': {
            return action.cart;
        }
        case 'addItem': {
            // Send request to add item to cart
            const movieToAdd = buildCartProduct(action.movie);
            fetchUpdate('POST', '/api/addItem', movieToAdd, action.dispatch)
            return cart;
        }
        case 'removeItem': {
            // Send request to remove item from cart
            fetchUpdate('DELETE','/api/removeItem', action.movie, action.dispatch)
             return cart;
        }
        case 'clear': {
            // Send request to clear cart
            fetchUpdate('DELETE', '/api/clearCart', null, action.dispatch)
            return cart;
        }
        case 'update':{
            // Fetch updated cart data from server
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