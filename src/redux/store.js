import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {tasksReducer as rootReducer} from './taskReducer';

export default function configureStore(preloadedState) {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools()
    )
 }

// export const store = createStore(rootReducer, composeWithDevTools());
