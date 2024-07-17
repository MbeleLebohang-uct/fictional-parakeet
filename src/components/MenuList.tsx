import { Menu, MenuProps } from 'antd'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, CloudOutlined, SafetyOutlined, SettingOutlined } from '@ant-design/icons';
import { DefaultThemeMode } from '../theme';
import { MenuInfo } from 'rc-menu/lib/interface';
import { EApplicationPageOption } from '../domain';

type MenuItem = Required<MenuProps>['items'][number];

interface MenuListProps {
  themeMode: DefaultThemeMode
}

const MenuList: React.FC<MenuListProps> = ({ themeMode } : MenuListProps) => {
  const navigate = useNavigate();
  const onClick =  (info: MenuInfo) => navigate( info.key == EApplicationPageOption.Home ? '/' : `/${info.key.toLowerCase()}`)
  const items: MenuItem[] = [
    {key: EApplicationPageOption.Home, icon: React.createElement(HomeOutlined), label: EApplicationPageOption.Home, onClick},
    {key: EApplicationPageOption.Seasons, icon: React.createElement(CloudOutlined), label: EApplicationPageOption.Seasons, onClick},
    {key: EApplicationPageOption.Policies, icon: React.createElement(SafetyOutlined), label: EApplicationPageOption.Policies, onClick},
    {key: EApplicationPageOption.Settings, icon: React.createElement(SettingOutlined), label: EApplicationPageOption.Settings, onClick},
  ]
  console.log('window.href', window.location.href);
  console.log('window.pathname', window.location.pathname);
  
  return (
    <Menu theme={themeMode} defaultSelectedKeys={[EApplicationPageOption.Home]} items={items} />
  )
}

export default MenuList