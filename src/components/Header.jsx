import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className = "heading">
            <img 
                src = "https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png"
                className = "logo"
                alt = "logo"
            />
            <h1 className = "title">CoviDost</h1>
        </div>
    )
}

export default Header
