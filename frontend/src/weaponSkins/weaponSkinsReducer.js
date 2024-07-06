

const INITIAL_STATE = {
    list: [],
    selectedProduct: null // Adicione isso se ainda não estiver presente
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'WEAPON_SKIN_FETCHED':
            return { ...state, selectedProduct: action.payload };
        case 'WEAPON_SKINS_FETCHED':
            return { ...state, list: action.payload };
        default:
            return state;
    }
};