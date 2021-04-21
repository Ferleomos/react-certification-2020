
const stateReducer = (state, action) => {
    switch (action.type) {
        case 'setQuerySearch': {
            return { ...state, query: action.value };
        }
        case 'setGlobalTheme': {
            return { ...state, theme: action.value };
        }
        default: {
            return { ...state };
        }
    }
};

export default stateReducer;