import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'


const Logo: React.FC = () => {
    const navigate = useNavigate();
    return (
        <a className='logo' onClick={() => navigate('/')}>
            <div className='logo-icon'>
                <img src={logo} alt="Aerobotics logo" height={ 32 }/>
            </div>
        </a>
    )
}

export default Logo