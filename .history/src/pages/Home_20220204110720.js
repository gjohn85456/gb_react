import { useContext } from "react"
import { MeyThemeContext } from "../App"

const Home = () => {
    const contextValue = useContext(MeyThemeContext);
    return (
        <div >My Home theme: {contextValue.theme}</div>
    )
}

export default Home