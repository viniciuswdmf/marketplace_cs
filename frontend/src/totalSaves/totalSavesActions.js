import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSavesSummary()
{
    const request = axios.get(`${BASE_URL}/totalSaves/summary`)
    return{
        type: 'SAVES_SUMMARY_FETCHED',
        payload: request
    }
}