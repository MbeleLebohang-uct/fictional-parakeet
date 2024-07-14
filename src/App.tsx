import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import AppMenu from './AppMenu';
import ThemeProvider from './theme/ThemeProvider';
import { WindowTitle } from './components/WindowTitle';
import RestClientProvider from './farms/providers/RestClientProvider';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <RestClientProvider>
          <Routes />
        </RestClientProvider>
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