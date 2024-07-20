import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from '../auth/authReducer'
import WeaponSkinsReducer from '../weaponSkins/weaponSkinsReducer'

const rootReducer = combineReducers({
    weaponSkins: WeaponSkinsReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
})
export default rootReducer