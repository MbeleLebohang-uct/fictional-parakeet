import React from 'react'
import { WindowTitle } from './components/WindowTitle';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Routes />
      <h1>Hello World</h1>
    </HelmetProvider>
  )
}

const Routes: React.FC = () => {
  return (
    <>
      <WindowTitle title={"Home"} />
    </>
  )
}

export default App;