const Home = () => {
    const obj = {
        x: 1
    }

    function updateObj() {
        obj.x = 2
        return obj
    }
    return (
        <div>Home</div>
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