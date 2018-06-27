import { fetchData } from './fetchData';

const LOADING_ACTION = {
    type: "LOADING",
    loading: true
}
const GET_USERS_ACTION =(users) => {
    return{
        type: "GET_USERS",
        users
    }   
}
const LOADED_ACTION = {
    type: "LOADED",
    loading: false
}



const myThunk = (dispatch, getState) =>{
    dispatch(LOADING_ACTION)
    fetchData.then((res)=>{
        dispatch(GET_USERS_ACTION(res));
        dispatch(LOADED_ACTION)
    })
};

export default myThunk;