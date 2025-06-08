interface ImportMetaEnv {
    readonly PUBLIC_BASE_URL: string;
    readonly PUBLIC_HYBRID_AUTH_ORIGIN: string;
    readonly PUBLIC_HYBRID_AUTH_BASE_PATH: string;
    readonly PUBLIC_HYBRID_AUTH_HYBRID_BASE_PATH: string;
    readonly PUBLIC_HYBRID_AUTH_USERNAME: string;
    readonly PUBLIC_HYBRID_AUTH_PASSWORD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
