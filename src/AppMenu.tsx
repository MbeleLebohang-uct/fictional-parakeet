import { Layout, Row, theme } from 'antd';
import React, { useState } from 'react'
import MenuList from './components/MenuList';
import Logo from './components/Logo';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useThemeMode } from './theme';
import { EApplicationPageOption } from './domain';
import { HomePage, SeasonsPage, PoliciesPage, SettingsPage } from './pages';
const { Sider, Header, Content } = Layout;

const AppMenu: React.FC = () => {
    const [activePage, setActivePage] = useState(EApplicationPageOption.Home);
    const [collapsed, setCollapsed] = useState(true);
    const { themeMode, setThemeMode } = useThemeMode();
    const { token: { colorBgContainer } } = theme.useToken();

    const getActivePage = () => {
        switch (activePage) {
            case EApplicationPageOption.Home:
                return <HomePage />
            case EApplicationPageOption.Seasons:
                return <SeasonsPage />
            case EApplicationPageOption.Policies:
                return <PoliciesPage />
            case EApplicationPageOption.Settings:
                return <SettingsPage />
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                className='v-sidebar' theme={themeMode} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo />
                <MenuList themeMode={themeMode} setActivePage={setActivePage} activePage={activePage} />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer }}>
                    <Row justify={'end'} align={'middle'} style={{ height: '100%' }}>
                        <ThemeToggleButton themeMode={themeMode} setThemeMode={setThemeMode} />
                    </Row>
                </Header>
                <Content style={{ margin: '20px 16px', background: colorBgContainer, minHeight: 280, borderRadius: 4, padding: 24 }}>
                    {getActivePage()}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppMenu;