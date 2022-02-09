import React from "react";
import Routers from "./pages/Routers";

export const MyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (
        <MyThemeContext.Provider value={{ theme: 'dark' }}>
            <Routers />
            {/* <div>React says Hello</div> */}
        </MyThemeContext.Provider>
    )
}

export default App;
