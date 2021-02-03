import React, {useState} from 'react';
import {AppLoading} from 'expo'
import {AppNavigation} from './src/navigation/AppNavigation'
import {bootstrap} from "./src/bootstrap";
import store from './src/redux/redux-store'
import {Provider} from "react-redux";

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                //сюда передаём то, что будет делать загрузку, для загрузки будет отдельный файл
                startAsync={bootstrap}
                //когда закончилась загрузка можем вызвать ещё функцию
                onFinish={() => setIsReady(true)}
                //обработка ошибки если она есть
                onError={err => console.log(err)}
            />
        )
    }
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}