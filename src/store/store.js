// This is where all of our redux happens


import { compose, createStore, applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import { rootReducer } from './root-reducer'



const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState())


    next(action);

    console.log('next stat =e: ', store.getState())

}

// root-reducer

const middleWares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middleWares))


export const store = createStore(rootReducer, undefined, composedEnhancers)