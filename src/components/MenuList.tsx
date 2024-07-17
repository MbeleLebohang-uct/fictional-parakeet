import { Menu, MenuProps } from 'antd'

import React from 'react'
import { HomeOutlined, CloudOutlined, SafetyOutlined, SettingOutlined } from '@ant-design/icons';
import { DefaultThemeMode } from '../theme';
import { MenuInfo } from 'rc-menu/lib/interface';
import { EApplicationPageOption } from '../domain';

type MenuItem = Required<MenuProps>['items'][number];

interface MenuListProps {
  themeMode: DefaultThemeMode
  setActivePage: React.Dispatch<React.SetStateAction<EApplicationPageOption>>
  activePage: EApplicationPageOption
}

const MenuList: React.FC<MenuListProps> = ({ themeMode, setActivePage, activePage } : MenuListProps) => {
  const onClick =  (info: MenuInfo) => setActivePage(info.key as EApplicationPageOption)
  const items: MenuItem[] = [
    {key: EApplicationPageOption.Home, icon: React.createElement(HomeOutlined), label: EApplicationPageOption.Home, onClick},
    {key: EApplicationPageOption.Seasons, icon: React.createElement(CloudOutlined), label: EApplicationPageOption.Seasons, onClick},
    {key: EApplicationPageOption.Policies, icon: React.createElement(SafetyOutlined), label: EApplicationPageOption.Policies, onClick},
    {key: EApplicationPageOption.Settings, icon: React.createElement(SettingOutlined), label: EApplicationPageOption.Settings, onClick},
  ]
  return (
    <Menu theme={themeMode} defaultSelectedKeys={[activePage]} items={items} />
  )
}

export default MenuList