/// <reference types="vite/client" />
declare global {
	interface ImportMetaEnv {
		VITE_BASE_URL?: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}
