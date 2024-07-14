/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_AEROBOTICS_API_KEY: string
    readonly VITE_AEROBOTICS_API_URI_BASE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}