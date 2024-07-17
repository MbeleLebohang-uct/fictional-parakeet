import { Layout, Row, theme } from 'antd';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuList from './components/MenuList';
import Logo from './components/Logo';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useThemeMode } from './theme';
import { HomePage, SeasonsPage, PoliciesPage, SettingsPage } from './pages';
const { Sider, Header, Content } = Layout;

const AppMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { themeMode, setThemeMode } = useThemeMode();
    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                className='v-sidebar' theme={themeMode} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo />
                <MenuList themeMode={themeMode} />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer }}>
                    <Row justify={'end'} align={'middle'} style={{ height: '100%' }}>
                        <ThemeToggleButton themeMode={themeMode} setThemeMode={setThemeMode} />
                    </Row>
                </Header>
                <Content style={{ margin: '20px 16px', background: colorBgContainer, minHeight: 280, borderRadius: 4, padding: 24 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/policies" element={<PoliciesPage />} />
                        <Route path="/seasons" element={<SeasonsPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppMenu;