import React from 'react'

function Navigation() {
    return (
       <div>
        <nav>
            <div className='logo'>
                <img src="images/download.png" alt="company-logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About Us</li>
                <li href="#">Contact Us</li>
            </ul>
        </nav>
       </div> 
    )
}

export default Navigation
