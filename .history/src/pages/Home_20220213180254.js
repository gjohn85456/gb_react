import { Title } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Title>123</Title>
            <div>
                <div>
                    <Link to='/login'>Sign in</Link>
                </div>
                <br />
                <div>
                    <Link to='/signup'> Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Home

// import { useContext } from "react"
// import { MyThemeContext } from "../App"

// const Home = () => {
//     const contextValue = useContext(MyThemeContext);
//     return (
//         <div >My Home theme: {contextValue.theme}</div>
//     )
// }

// export default Home