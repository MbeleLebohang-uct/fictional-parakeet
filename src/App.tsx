import React from 'react'
import { WindowTitle } from './components/WindowTitle';
import { HelmetProvider } from 'react-helmet-async';
import AppMenu from './AppMenu';
import ThemeProvider from './theme/provider';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </HelmetProvider>
  )
}

const Routes: React.FC = () => {
  return (
    <>
      <WindowTitle title={"Home"} />
      <AppMenu/>
    </>
  )
}

export default App;