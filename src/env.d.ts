/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PWA_NAME: string
    readonly VITE_PWA_SHORT_NAME: string
    readonly VITE_PWA_DESCRIPTION: string
    readonly VITE_PWA_THEME_COLOR: string
    readonly VITE_MAX_WIDTH_MOBILE: number
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }