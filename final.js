
const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_BOOKS = 'BUY_BOOKS'
const BUY_PENS = 'BUY_PENS'

const buyBooks = ()=> {
    return {
        type:BUY_BOOKS
        
    }
}
const buyPens = ()=> {
    return {
        type:BUY_PENS
    }
}
let penState ={
    noOfPens:100
}
let booksState ={
    noOfBooks:20

}
const BooksReducer = (state=booksState,action)=> {
    switch(action.type) {
        case BUY_BOOKS:
            return {
                ...state,
                noOfBooks:state.noOfBooks-4
            }
            default:return state
    }

}

const PenReducer = (state=penState,action)=> {
    switch(action.type) {
        case BUY_PENS :
            return {
                noOfPens:state.noOfPens-1
            }
            default:return state
    }
}
const rootReducer = combineReducer({
    pens:PenReducer,
    books:BooksReducer
})
const store= createStore(rootReducer)
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated state',store.getState()))
store.dispatch(buyBooks())
store.dispatch(buyPens())
unsubscribe()