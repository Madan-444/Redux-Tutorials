const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware



const initialState = {
    loading:false,
    users:[],
    error:''
}
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = ()=> {
    return {
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users)=> {
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure= (error)=> {
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}
const reducer = (state=initialState,action)=> {
    switch(action.type) {
        case FETCH_USER_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS :
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_FAILURE :
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

const fetchUsers = ()=> {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the array of users
            const users = response.data.map((user)=> user.email)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        } )
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())

