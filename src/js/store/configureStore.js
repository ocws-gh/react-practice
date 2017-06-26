import { createStore } from 'redux';
import appReducer from '../reducers/index';

export default function configureStore() {
    const store = createStore(appReducer);
    return store;
}