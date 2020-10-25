import React from 'react'
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const SwapiApp = () => {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}

export default SwapiApp
