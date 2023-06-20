import { useState } from "react"

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(prev => !prev)
    const hideWhenVisible = { display: visible ? 'none': '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    return (
        <div className="">
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility} className='toggle'>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className='open'>
                {props.buttonLabel === 'View' ?
                <button onClick={toggleVisibility}> Hide </button> : ''
                }
                {props.children}
                {props.buttonLabel !== 'View' ?
                <button onClick={toggleVisibility}>Cancel</button> : ''
                }
            </div>
        </div>
    )
}

export default Togglable