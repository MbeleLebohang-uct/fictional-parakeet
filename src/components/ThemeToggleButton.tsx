import { Button } from 'antd'
import React from 'react'
import { DefaultThemeMode } from '../theme'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'

interface ToggleButtonProps {
    themeMode: DefaultThemeMode
    setThemeMode: (theme: DefaultThemeMode) => void,
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ themeMode, setThemeMode }: ToggleButtonProps) => {
    return (
        <Button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
            {themeMode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
        </Button>
    )
}

export default ToggleButton