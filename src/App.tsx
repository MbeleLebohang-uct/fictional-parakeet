import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <Router>
            <WindowTitle />
            <AppMenu />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={import.meta.env.VITE_ENVIRONMENT !== 'production'} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;