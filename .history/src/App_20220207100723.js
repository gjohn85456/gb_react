import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/Routers";
import { store } from './store/index'
import { BrowserRouter } from "react-router-dom"

export const MyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routers />
            </Provider>
        </BrowserRouter>
    )
}
export default App;