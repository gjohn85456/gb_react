import { useContext } from "react"
import { MyThemeContext } from "../App"

const Home = () => {
    const contextValue = useContext(MyThemeContext);
    return (
        <div >My Home theme: {contextValue.theme}</div>
    )
}

export default Home