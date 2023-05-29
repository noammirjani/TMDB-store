import React, { createContext, useContext, useReducer } from 'react';

// Create the history context and dispatch context
const HistoryContext = createContext([]);
const HistoryDispatchContext = createContext();

// Custom hooks to access the history state and dispatch
export const useHistoryState = () => useContext(HistoryContext);
export const useHistoryDispatch = () => useContext(HistoryDispatchContext);

// Reducer function for managing the search history data
const searchReducer = (searchesData, action) => {

      const getHistObj = () =>{
            return {url:  action.searchData.filterUrl,
                   value: action.searchData.searchValue,
                   type:  action.searchData.selectedFilterType.split(" ")[0]}
        }
        const contains = (search) => {
            return search.url === action.searchData.filterUrl
        }

    switch (action.type) {
        case 'added':
            if(searchesData.some(search => contains(search)))
                return searchesData
            return [...searchesData, getHistObj()];
        case 'remove':
            return searchesData.filter((_, index) => index !== action.removeIndex);
        case 'clear':
            return [];
        default:
            throw new Error('Unknown action: ' + action.type);
    }
};

export function HistoryProvider({ children }) {
    // Initialize the history state using the reducer
    const [history, dispatch] = useReducer(searchReducer, [], () => []);

    return (
        // Provide the history state and dispatch to child components
        <HistoryContext.Provider value={history}>
            <HistoryDispatchContext.Provider value={dispatch}>
                {children}
            </HistoryDispatchContext.Provider>
        </HistoryContext.Provider>
    );
}
