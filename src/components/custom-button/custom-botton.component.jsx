import React from 'react'
import './custom-button.style.css'
const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps})=>(
    <button className={`${inverted?"inverted":''}${isGoogleSignIn?"google-sign-in":''} custom-button`} {...otherProps}>{children.toUpperCase()}</button>
)
export default CustomButton