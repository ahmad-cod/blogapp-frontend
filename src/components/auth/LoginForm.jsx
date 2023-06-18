import { useState } from "react"
import authService from "../../services/auth"
import blogService from "../../services/blogs"
import Header from "../Header"
import SignupForm from "./SignupForm"
import Notification from "../Notification"

const LoginForm = ({ setUser, notification, setNotification }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await authService.login({ username, password })
            console.log(user)
            if(!user) {
                setNotification({ type: 'error', message: 'Wrong username or password' })
                setTimeout(() => setNotification({}), 5000)
            }
            else {
                setUser(user)
                blogService.setToken(user.token)
                window.localStorage.setItem('user', JSON.stringify(user))
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Notification notification={notification} />
            <SignupForm setUser={setUser} />
            <form onSubmit={handleLogin}>
                <Header text='Login to the Application' />
                <div className="">
                    Username
                    <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} required/>
                </div>
                <div className="">
                    Password
                    <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginForm