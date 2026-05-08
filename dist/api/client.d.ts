/**
 * Vybe API HTTP client: axios instance with X-API-Key, retries, and human-readable errors.
 * Used by tokens, holders, and trades modules. Never log the raw API key.
 */
import { AxiosInstance } from 'axios';
/**
 * Turn Axios/API errors into a message suitable for logs or API responses.
 * Example: "API returned 403 Forbidden — verify your API key has access to the /v4/tokens endpoint."
 */
export declare function toHumanReadableError(err: unknown): string;
/**
 * Run an async function with retries on error (2s delay, up to 3 retries).
 * @param fn - Function that performs one attempt
 * @returns Result of fn
 */
export declare function withRetry<T>(fn: () => Promise<T>): Promise<T>;
/**
 * Create an authenticated axios instance for Vybe API.
 * @param apiKey - VYBE_API_KEY (trimmed)
 */
export declare function createHttpClient(apiKey: string): AxiosInstance;
//# sourceMappingURL=client.d.ts.map