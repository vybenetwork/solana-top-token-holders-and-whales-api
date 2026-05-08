/**
 * Resolve token symbol: hardcoded WSOL/USDC, else Metaplex metadata via public mainnet RPC.
 * Used for quote tokens in trades summary and as fallback when Vybe token details fail.
 * RPC/account fetches retry on error: 2s delay, up to 3 retries.
 */
/**
 * Get symbol for a mint: hardcoded for WSOL/USDC, otherwise fetches Metaplex metadata.
 * Retries RPC/account fetch on error (2s delay, up to 3 retries).
 * @param mintAddress - Token mint address
 * @returns Symbol string, or mint address if not found
 */
export declare function getTokenSymbol(mintAddress: string): Promise<string>;
//# sourceMappingURL=token-symbol.d.ts.map