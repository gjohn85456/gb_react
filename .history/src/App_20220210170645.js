import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/Routers";
import { store } from './store/index'
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react";

export const MyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routers />
            </PersistGate>
        </Provider>

    )
}
export default App;
