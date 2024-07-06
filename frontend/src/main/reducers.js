import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'
import WeaponSkinsReducer from '../weaponSkins/weaponSkinsReducer'

const rootReducer = combineReducers({
    dashboard : DashboardReducer,
    tab: TabReducer,
    billingCycle : BillingCycleReducer,
    weaponSkins: WeaponSkinsReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
})
export default rootReducer