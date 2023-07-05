import { useSelector } from "react-redux"

const Notification = () => {
  const { message, type } = useSelector(state => state.notification)

  if (!message) return null
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  )
}

export default Notification