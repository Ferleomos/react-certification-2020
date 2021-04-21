import React, { useContext, useReducer } from 'react';
import stateReducer from './StateReducer';

const GlobalContext = React.createContext(null);

function useGlobalContext() {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error(`Can't use "useGlobalContext" without a Context Provider!`);
    }
    return context;
}

function GlobalContextProvider({children}){
    const [state, dispatch] = useReducer(stateReducer, {
        query: '',
        theme: 'light'
    });

    const value = { state, dispatch };

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}


export { useGlobalContext };
export default GlobalContextProvider;