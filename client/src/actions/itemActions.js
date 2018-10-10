// make backend requests here and receive data response

import {GET_ITEMS_BY_SEARCH, GET_ITEMS_BY_CATEGORY, ITEMS_LOADING } from "./types";
import axios from 'axios';

export const getItemsBySearch = (search) => dispatch => {
    dispatch(setItemsLoading());
    return axios
        .get(`/api/items/${search}`)
        .then(res => 
            dispatch({
                type: GET_ITEMS_BY_SEARCH,
                payload: res.data
            })
        )
        .catch(err => console.log(err))
    };

export const getItemsByCategory = (category) => {
    return {
        type: GET_ITEMS_BY_CATEGORY,
        payload: category
    };
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};

// these get sent to the reducer switch cases