import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {sitesDisponiveis: [{}]}

export const getList = () => {
    return dispatch => {
        return axios.get(`${BASE_URL}/weaponSkins`)
            .then(response => {
                dispatch({
                    type: 'WEAPON_SKINS_FETCHED',
                    payload: response.data
                });
            })
            .catch(error => {
                console.error('Error fetching weapon skins:', error);
                // Pode-se tratar erros aqui, se necessário
            });
    };
};

export function create(values){
    return submit(values, 'post')
}

export function update(product) {
    return dispatch => {
        const id = product._id;
        axios.put(`${BASE_URL}/weaponSkins/${id}`, product)
            .then(() => {
                toastr.success('Sucesso', 'Produto atualizado com sucesso');
                dispatch(init()); // Atualize a lista ou faça o redirecionamento necessário
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
}

export function getProductById(id) {
    return dispatch => {
        axios.get(`${BASE_URL}/weaponSkins/${id}`)
            .then(response => {
                dispatch({
                    type: 'WEAPON_SKIN_FETCHED',
                    payload: response.data
                });
            })
            .catch(error => {
                toastr.error('Erro', 'Não foi possível buscar o produto.');
            });
    };
}
export function remove(product) {
    console.log('Removing product:', product); // Adicione este log
    return dispatch => {
        const id = product._id;
        axios.delete(`${BASE_URL}/weaponSkins/${id}`)
            .then(() => {
                toastr.success('Sucesso', 'Operação realizada com sucesso');
                dispatch(init());
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
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
