interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_KEY: string;
  readonly VITE_EMAILJS_TEMPLATE_KEY: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnvGooglePortfolio;
}
