import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className="header">
            <div className="flex">
                <Link to='/movies'><img alt="logo" src='/assets/starwars-logo-light.png' className='logo' /></Link>
                <div className="m-auto text-center title-container">
                    <h1 className="title-text">SWAPI</h1>
                    <h3 className="title-text -mt-5">By: Brandon Reyes</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Header
