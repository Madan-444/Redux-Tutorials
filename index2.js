const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducer = redux.combineReducers
const logger = reduxLogger.createLogger() //redux-logger is example of middleware
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }

}
function buyIcecream(){
    return {
        type:BUY_ICE_CREAM
    }
}
// const initialState = {
//     noOfCakes:10,
//     noOfIceCream:20
// }
const cakeInitialState = {
    noOfCakes:10
}
const iceCreamInitialState = {
    noOfIceCream:20
}
// const reducer = (state=initialState,action)=> {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             noOfCakes:state.noOfCakes -1
//         }
//         case BUY_ICE_CREAM: return {
//             ...state,
//             noOfIceCream:state.noOfIceCream -1
//         }
//         default: return state
//     } 
// }
const cakeReducer = (state=cakeInitialState,action)=> {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes:state.noOfCakes -1
        }
       
        default: return state
    } 
}
const icecreamReducer = (state=iceCreamInitialState,action)=> {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            noOfIceCream:state.noOfIceCream -1
        }
        default: return state
    } 
}
const rootReducer = combineReducer({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()

