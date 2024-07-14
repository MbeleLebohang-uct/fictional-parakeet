import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { WindowTitle } from './components';
import { ThemeProvider } from './theme';
import AppMenu from './AppMenu';

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