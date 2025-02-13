/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_PREFIX: string;  // Add any environment variables you want to access here
  // You can add more VITE_* variables if necessary
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
