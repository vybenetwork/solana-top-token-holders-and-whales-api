/**
 * Vybe trades and related: /v4/trades, /v4/programs/labeled-program-accounts, /v4/wallets/top-traders.
 * @see https://docs.vybenetwork.com/reference/get_trade_data_program_v4
 * @see https://docs.vybenetwork.com/reference/get_top_traders_v4
 */
import { withRetry } from './client.js';
/**
 * Fetch last N trades for a base token.
 * @param http - Authenticated axios instance
 * @param mintAddress - Token mint
 * @param options - limit (default 250), page (default 0), sortByDesc (default blockTime)
 */
export async function getTrades(http, mintAddress, options = {}) {
    const { limit = 250, page, sortByDesc = 'blockTime', timeStart, timeEnd } = options;
    return withRetry(async () => {
        const params = {};
        params.mintAddress = mintAddress;
        if (timeStart != null && timeStart >= 0)
            params.timeStart = String(timeStart);
        if (timeEnd != null && timeEnd >= 0)
            params.timeEnd = String(timeEnd);
        if (page !== undefined)
            params.page = String(page);
        params.limit = String(limit);
        params.sortByDesc = sortByDesc;
        const { data } = await http.get('/v4/trades', { params });
        return data;
    });
}
/**
 * Fetch labeled program for a single program address.
 * GET /v4/programs/labeled-program-accounts?programAddress=xxx — one request per address.
 * @see https://docs.vybenetwork.com/reference/get_known_program_accounts_v4
 */
export async function getLabeledProgramAccount(http, programAddress) {
    try {
        return await withRetry(async () => {
            const { data } = await http.get('/v4/programs/labeled-program-accounts', {
                params: { programAddress: programAddress.trim() },
            });
            return data;
        });
    }
    catch {
        return { programs: [] };
    }
}
/**
 * Fetch top traders by realized PnL for a token (e.g. 30d).
 * @param http - Authenticated axios instance
 * @param mintAddress - Token mint
 * @param options - resolution (default 30d), sortByDesc (default realizedPnlUsd), limit (default 100)
 */
export async function getTopTraders(http, mintAddress, options = {}) {
    const { resolution = '30d', sortByDesc = 'realizedPnlUsd', limit = 100 } = options;
    return withRetry(async () => {
        const { data } = await http.get('/v4/wallets/top-traders', {
            params: { mintAddress, resolution, sortByDesc, limit },
        });
        return data;
    });
}
//# sourceMappingURL=trades.js.map