/**
 * Vybe API client: single entry that wires tokens, holders, and trades.
 * Usage: createClient(apiKey) then client.getToken(mint), client.getTopHolders(mint), etc.
 */
import { createHttpClient } from './client.js';
import { getToken as fetchToken } from './tokens.js';
import { getTopHolders } from './holders.js';
import { getTrades, getLabeledProgramAccount, getTopTraders, } from './trades.js';
/**
 * Create a Vybe API client. All methods use the same API key and retry logic.
 * @param apiKey - VYBE_API_KEY (from env or passed in)
 */
export function createClient(apiKey) {
    const http = createHttpClient(apiKey);
    return {
        getToken: (mintAddress) => fetchToken(http, mintAddress),
        getTopHolders: (mintAddress, options) => getTopHolders(http, mintAddress, options),
        getTrades: (mintAddress, options) => getTrades(http, mintAddress, options),
        getLabeledProgramAccount: (programAddress) => getLabeledProgramAccount(http, programAddress),
        getTopTraders: (mintAddress, options) => getTopTraders(http, mintAddress, options),
    };
}
//# sourceMappingURL=index.js.map