const Notification = ({ notification: {message, type} }) => {
    if (!message) return null
    return (
        <div className={`notification ${type}`}>
            <p>{message}</p>
        </div>
    )
}

export default Notification