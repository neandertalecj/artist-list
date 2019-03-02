import axios from 'axios'
import {Conf} from '../Conf/path'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types'

const { BASE_PATH, API_KEY, METHOD, YOUR_API_KEY, FORMAT, COUNTRY, COUNTRY_NAME } = Conf





export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios
        .get(`${BASE_PATH}/?${METHOD}&${COUNTRY}${COUNTRY_NAME}&${API_KEY}${YOUR_API_KEY}&${FORMAT}`)
        .then(res => {
            // console.log('ation get',res)
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })})
}

export const deleteItem = id => dispatch => {
    // return {
    //     type: DELETE_ITEM,
    //     payload: id
    // }
    axios.delete(`/api/items/${id}`).then( res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
}
export const addItem = item => dispatch => {
    // return {
    //     type: ADD_ITEM,
    //     payload: item 
    // }
    axios
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload:res.data
            }))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}