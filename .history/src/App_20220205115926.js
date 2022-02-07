import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/Routers";

export const MyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (
        // <MyThemeContext.Provider value={{ theme: 'dark' }}>
        {/* <Routers /> */ }
            {/* <div>React says Hello</div> */ }
    {/* </MyThemeContext.Provider> */ }
    <Provider store={store}>
        <Routers />
    </Provider>

    )
}

export default App;
