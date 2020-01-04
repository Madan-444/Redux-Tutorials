const redux = require('redux')
const createStore = redux.createStore

const BUY_BOOKS= 'BUY_BOOKS'
 const buyBooks = ()=> {
    return {
        type:BUY_BOOKS
    }
 }
 let initialState= {
     noOfBooks :100
 }
 const reducer = (state=initialState,action)=> {
     switch(action.type) {
         case BUY_BOOKS: 
         return {
             noOfBooks:state.noOfBooks-1
         }
         default:return state
     }
 }

 const store = createStore(reducer)
 store.subscribe(()=> console.log('Updated State',store.getState()))
 store.dispatch(buyBooks())
 store.dispatch(buyBooks())
 store.dispatch(buyBooks())
// unsubscribe()