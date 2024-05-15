import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import totalSavesReducer from '../totalSaves/totalSavesReducer'
// import AuthReducer from '../auth/authReducer'

// const rootReducer = combineReducers({
//     dashboard: DashboardReducer,
//     tab: TabReducer,
//     billingCycle : BillingCycleReducer,
//     form: formReducer,
//     toastr: toastrReducer,
//     auth: AuthReducer,
// })

const rootReducer = combineReducers({
    dashboard : DashboardReducer,
    tab: TabReducer,
    billingCycle : BillingCycleReducer,
    totalSaves: totalSavesReducer,
    form: formReducer,
    toastr: toastrReducer,
})
export default rootReducer