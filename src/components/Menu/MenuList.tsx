import { Menu, MenuProps } from 'antd'
import React from 'react'
import { HomeOutlined, AreaChartOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import { useTheme } from '../../theme';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {key: '1', icon: React.createElement(HomeOutlined), label: 'Home'},
    {key: '2', icon: React.createElement(AreaChartOutlined), label: 'Orchards'},
    {key: '3', icon: React.createElement(TeamOutlined), label: 'Policies'},
    {key: '4', icon: React.createElement(SettingOutlined), label: 'Settings'},
]

const MenuList: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Menu theme={theme} defaultSelectedKeys={['1']} items={items} />
  )
}

export default MenuList