
const LoggedInUser = ({ user, setUser }) => {
    const handleLogout = () => {
        window.localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <div>
            {user} logged in 
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LoggedInUser