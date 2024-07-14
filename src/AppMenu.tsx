import { Layout } from 'antd';
import React, { useState } from 'react'
import Logo from './components/Logo';
import MenuList from './components/Menu/MenuList';
import { useTheme } from './theme';

const { Sider } = Layout;

const AppMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { theme } = useTheme();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider className='v-sidebar' collapsedWidth='60' theme={theme} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo />
                <MenuList />
            </Sider>
        </Layout>
    )
}

export default AppMenu;