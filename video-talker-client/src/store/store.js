import rootReducer from "./reducer";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import additionalMiddleware from './middleware/additionalMiddleware'
const store = configureStore({
    reducer: {
        rootReducer,
        middleware: () => new Tuple(additionalMiddleware),
    }
});
export default store;