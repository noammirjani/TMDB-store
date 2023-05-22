
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
            return [...cart, { movie: action.movie}];
        }
        case 'remove': {
            return cart.filter((movie) => cart.indexOf(movie) !== action.removeIndex);
        }
        case 'deleted': {
            return [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
