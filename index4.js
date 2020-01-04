
const redux = require('redux') 
const createstore = redux.createStore
let BUY_CAKE = 'BUY_CAKE'
let buyCake=()=> {
    return {
        type:BUY_CAKE
    }
}
const initialState= {
    noOfCakes: 20
}

const reducer = (state=initialState,action)=> {
    switch(action.type) {
        case BUY_CAKE: 
        // return {
        //     ...state,
        //     noOfCakes:state.noOfCakes+2
        // }
        return {
            ...state,
            noOfCakes:state.noOfCakes-10
        }
        default:return state
    }
}

const store = createstore(reducer)
console.log('initial State',store.getState())
const unsubscribe=store.subscribe(()=> console.log('Updated State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()