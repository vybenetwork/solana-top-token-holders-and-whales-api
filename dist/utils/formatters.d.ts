/**
 * Display helpers: truncate addresses, format numbers. Used by server or CLI output.
 * Frontend has its own formatters in public/app.js.
 */
/**
 * Truncate address to first 4 and last 4 chars with ....
 * @param addr - Full address string
 * @param maxLength - If addr is shorter, return as-is
 */
export declare function truncateAddress(addr: string, maxLength?: number): string;
//# sourceMappingURL=formatters.d.ts.map