import React from "react";
import useFetchFarms from "../hooks/useFetchFarms";

type RestClientContextType = {
    useFetchFarms: typeof useFetchFarms;
};

export const RestClientContext = React.createContext<RestClientContextType | undefined>(undefined);
