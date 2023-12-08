interface ImportMetaEnv {
  readonly VITE_REACT_APP_BACKEND_URL: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
