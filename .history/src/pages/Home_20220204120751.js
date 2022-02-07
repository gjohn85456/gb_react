import { useContext } from "react"
import { MeyThemeContext } from "../App"

const Home = () => {
    const contextValue = useContext(MyThemeContext);
    return (
        <div >My Home theme: {contextValue.theme}</div>
    )
}

export default Home