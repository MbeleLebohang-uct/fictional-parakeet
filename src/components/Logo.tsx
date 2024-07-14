import React from 'react'
import logo from '../assets/logo.svg'


const Logo: React.FC = () => {
    return (
        <div className='logo'>
            <div className='logo-icon'>
                <img src={logo} alt="Aerobotics logo" height={ 32 }/>
            </div>
        </div>
    )
}

export default Logo