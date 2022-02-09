const Home = () => {
    const obj = {
        x: 1
    }

    //console.log(obj);

    function updateObj() {
        obj.x = 2
        return obj
    }

    function updateObj1() {
        const newObj = {
            ...obj,
            x: 2
        }
    }
    console.log(updateObj());

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