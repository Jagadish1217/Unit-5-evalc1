import { useState } from "react";

const Login = ({ switchPage }) => {
    const initState = {
        username: "",
        password: "",
    }
    const [isAuth, setIsAuth] = useState(false)
    const [loginData, setLoginData] = useState(initState)
    if (!switchPage) {
        return null;
    }
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const handleLogin = () => {
        const { username, password } = loginData;
        if (username === "admin" && password === "admin") {
            setIsAuth(true)
        }
        else {
            console.log("error")
        }

    }
    if (isAuth) {
        return <Login/>
    }
    return (
        <>
            <input placeholder="Enter username" name="username" value={loginData.username} onChange={handleChange} />
            <input placeholder="Enter password" name="password" value={loginData.password} onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </>
    )
};
export { Login };