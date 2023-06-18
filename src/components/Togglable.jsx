import { useState } from "react"

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(prev => !prev)
    const hideWhenVisible = { display: visible ? 'none': '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    return (
        <div className="">
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisibility}>Cancel</button>
            </div>
        </div>
    )
}

export default Togglable