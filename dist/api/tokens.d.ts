/**
 * Vybe token details: GET /v4/tokens/{mintAddress}.
 * @see https://docs.vybenetwork.com/reference/get_token_details_v4
 */
import type { AxiosInstance } from 'axios';
import type { VybeToken } from '../types/api.js';
/**
 * Fetch token stats and metadata for a mint.
 * @param http - Authenticated axios instance (from createHttpClient)
 * @param mintAddress - SPL token mint address
 * @returns Token details; throws with human-readable message on 403/5xx
 */
export declare function getToken(http: AxiosInstance, mintAddress: string): Promise<VybeToken>;
//# sourceMappingURL=tokens.d.ts.map