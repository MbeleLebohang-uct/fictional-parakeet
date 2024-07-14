import { useContext } from "react";
import { RestClientContext } from "../domain/RestClientContextType";

const useRestClient = () => {
    const context = useContext(RestClientContext);
    if (context === undefined) {
      throw new Error('useRestClient must be used within a RestClientProvider');
    }
    return context;
};

export default useRestClient;