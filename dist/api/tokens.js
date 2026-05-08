/**
 * Vybe token details: GET /v4/tokens/{mintAddress}.
 * @see https://docs.vybenetwork.com/reference/get_token_details_v4
 */
import { withRetry } from './client.js';
/**
 * Fetch token stats and metadata for a mint.
 * @param http - Authenticated axios instance (from createHttpClient)
 * @param mintAddress - SPL token mint address
 * @returns Token details; throws with human-readable message on 403/5xx
 */
export async function getToken(http, mintAddress) {
    return withRetry(async () => {
        const { data } = await http.get(`/v4/tokens/${mintAddress}`);
        return data;
    });
}
//# sourceMappingURL=tokens.js.map