import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Use named import for `thunk`
import rootReducer from './reducers';

// Setup middleware
const middleware = [thunk];

// Compose enhancers safely
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware and enhancers
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
