
const redux = require('redux')
const createStore = redux.createStore

let BUY_CAKE  = 'BUY_CAKE'


const buyCake = ()=> {
    return {
        type:BUY_CAKE
    }
}
let initialState = {
    numOfCakes:10
}

const reducer = (state=initialState,action)=> {
    switch(action.type) {
        case BUY_CAKE:
            return {
                numOfCakes:state.numOfCakes-1
            } 
        case BUY_CAKE:
            return {
                numOfCakes:state.numOfCakes+1
            } 
            default:return state
        }
        
    }
const store = createStore(reducer);
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

