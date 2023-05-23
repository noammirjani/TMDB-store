
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {

    const [cart, dispatch] = useReducer( cartReducer, []);

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

function cartReducer(cart, action) {
    switch (action.type) {
        case 'added': {
            const movieToAdd = action.movie;
            const isMovieAlreadyInCart = cart.some((item) => item.movie.id === movieToAdd.id);

            if (!isMovieAlreadyInCart) {
                return [...cart, { movie: movieToAdd }];
            }
            return cart;
        }
        case 'remove': {
            return cart.filter((movie) => cart.indexOf(movie) !== action.removeIndex);
        }
        case 'delete': {
            return [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
