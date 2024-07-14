import React from 'react';
import useFetchFarms from '../hooks/useFetchFarms';
import { RestClientContext } from '../domain/RestClientContextType';

interface RestClientProviderProps {
  children: React.ReactNode
}

const RestClientProvider: React.FC<RestClientProviderProps> = ({ children }: RestClientProviderProps) => {
  return (
    <RestClientContext.Provider value={{ useFetchFarms }}>
      {children}
    </RestClientContext.Provider>
  );
};

export default RestClientProvider;