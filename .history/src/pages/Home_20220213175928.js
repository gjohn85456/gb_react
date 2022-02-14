Limport { Title } from "@mui/icons-material";

const Home = () => {
    return (
        <div>
            <Title>Home</Title>
            <div>
                <Link to='/login'>Sign in</Link>
                <Link to='/signup'> Sign up</Link>
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