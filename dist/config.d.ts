/**
 * Application configuration: env loading, API base URL, and constants.
 * All Vybe API base URLs and timeouts live here — no magic strings in api/ or server.
 */
/** Load .env from project root. Call once at startup. */
export declare function loadEnv(): void;
/**
 * Get Vybe API key from env. Throws if missing.
 * @returns The trimmed VYBE_API_KEY value
 */
export declare function getApiKey(): string;
/** Vybe API base URL (no trailing slash). */
export declare const VYBE_API_BASE = "https://api.vybenetwork.xyz";
/** Request timeout for Vybe API calls (ms). */
export declare const VYBE_TIMEOUT_MS = 60000;
/** Max retries for backend/RPC calls before failing (total attempts = this + 1). */
export declare const VYBE_MAX_RETRIES = 3;
/** Delay between retries (ms). */
export declare const VYBE_RETRY_DELAY_MS = 2000;
/** Path to public static assets (for Express). */
export declare const PUBLIC_DIR: string;
//# sourceMappingURL=config.d.ts.map