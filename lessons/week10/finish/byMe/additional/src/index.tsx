import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import AppWithReducer from './AppWithReducer';
import { Provider } from 'react-redux';
import { store } from './state/store';
import AppWithRedux from './AppWithRedux';

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<div>
    <App />
    <AppWithReducer />
    < Provider store={store} >
        <AppWithRedux />
    </Provider >
</div>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ​import { store } from './state/store'
// import { Provider } from 'react-redux'

// ReactDOM.render(
//     <Provider store={store}>
//         <AppWithRedux/>
//     </Provider>, document.getElementById('root')
// )
