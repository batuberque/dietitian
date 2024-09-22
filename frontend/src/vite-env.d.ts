interface ImportMetaEnv {
  readonly VITE_CAPTCHA_KEY: string;
  readonly VITE_REACT_APP_BACKEND_URL: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png' {
  const content: any;
  export default content;
}
