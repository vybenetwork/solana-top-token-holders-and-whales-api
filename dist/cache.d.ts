/**
 * Persistent JSON cache for symbol and program-label lookups.
 * Read from disk before each request; write to disk when a new record is added.
 * No startup load — next request sees updates made while the server is running.
 */
import type { VybeProgramsResponse } from './types/api.js';
export declare function readSymbolCacheFromDisk(): Record<string, string>;
export declare function writeSymbolCacheToDisk(data: Record<string, string>): void;
export declare function readProgramCacheFromDisk(): Record<string, VybeProgramsResponse>;
export declare function writeProgramCacheToDisk(data: Record<string, VybeProgramsResponse>): void;
//# sourceMappingURL=cache.d.ts.map