const INITIAL_STATE = {savesSummary: {currentValue:0, incomingMonthValue:0, totalValue:0}}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SAVES_SUMMARY_FETCHED':
            return{...state, savesSummary: action.payload.data}
            default:
                return state
    }
}