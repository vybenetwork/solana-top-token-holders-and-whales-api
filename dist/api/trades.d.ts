/**
 * Vybe trades and related: /v4/trades, /v4/programs/labeled-program-accounts, /v4/wallets/top-traders.
 * @see https://docs.vybenetwork.com/reference/get_trade_data_program_v4
 * @see https://docs.vybenetwork.com/reference/get_top_traders_v4
 */
import type { AxiosInstance } from 'axios';
import type { VybeProgramsResponse, VybeTopTradersResponse } from '../types/api.js';
/** Trade item from GET /v4/trades (shape varies; we use programAddress, quoteMintAddress, marketAddress). */
export type VybeTradesResponse = {
    data?: any[];
    [key: string]: unknown;
};
export interface GetTradesOptions {
    limit?: number;
    page?: number;
    sortByDesc?: string;
    /** Start time of the data to return (unix timestamp). Used for consistent pagination. */
    timeStart?: number | null;
    /** End time of the data to return (unix timestamp). */
    timeEnd?: number | null;
}
/**
 * Fetch last N trades for a base token.
 * @param http - Authenticated axios instance
 * @param mintAddress - Token mint
 * @param options - limit (default 250), page (default 0), sortByDesc (default blockTime)
 */
export declare function getTrades(http: AxiosInstance, mintAddress: string, options?: GetTradesOptions): Promise<VybeTradesResponse>;
/**
 * Fetch labeled program for a single program address.
 * GET /v4/programs/labeled-program-accounts?programAddress=xxx — one request per address.
 * @see https://docs.vybenetwork.com/reference/get_known_program_accounts_v4
 */
export declare function getLabeledProgramAccount(http: AxiosInstance, programAddress: string): Promise<VybeProgramsResponse>;
export interface GetTopTradersOptions {
    resolution?: string;
    sortByDesc?: string;
    limit?: number;
}
/**
 * Fetch top traders by realized PnL for a token (e.g. 30d).
 * @param http - Authenticated axios instance
 * @param mintAddress - Token mint
 * @param options - resolution (default 30d), sortByDesc (default realizedPnlUsd), limit (default 100)
 */
export declare function getTopTraders(http: AxiosInstance, mintAddress: string, options?: GetTopTradersOptions): Promise<VybeTopTradersResponse>;
//# sourceMappingURL=trades.d.ts.map