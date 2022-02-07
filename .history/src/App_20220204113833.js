import React from "react";
import Routers from "./pages/Routers";

export const MeyThemeContext = React.createContext({ theme: 'dark' });

const App = () => {
    return (
        <MeyThemeContext.Provider value={{ theme: 'dark' }}>
            <Routers />
            {/* <div>React says Hello</div> */}
        </MeyThemeContext.Provider>
    )
}

export default App;
