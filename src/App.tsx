import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { WindowTitle } from './components';
import { ThemeProvider } from './theme';
import AppMenu from './AppMenu';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={import.meta.env.VITE_ENVIRONMENT !== 'production'} position='bottom-right'/>
    </QueryClientProvider>
  )
}

const Routes: React.FC = () => {
  return (
    <>
      <WindowTitle title={"Home"} />
      <AppMenu />
    </>
  )
}

export default App;