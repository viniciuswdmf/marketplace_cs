import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {sitesDisponiveis: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/weaponSkins`)
    return {
        type: 'WEAPON_SKINS_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/weaponSkins/${id}`, values).then(res => {
            toastr.success('Sucesso', 'Operaçao realizada com sucesso')
            dispatch(init())
        }).catch(e =>{
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}

export function init(){
    return [
        getList(),
        initialize('weaponSkins', INITIAL_VALUES)
    ]
}
