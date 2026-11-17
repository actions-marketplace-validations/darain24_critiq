import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { type ReviewComment, type ReviewOptions } from '@critiq-dev/review-core';
type ReviewFunction = (diff: string, options?: ReviewOptions) => Promise<ReviewComment[]>;
export declare function createReviewServer(review?: ReviewFunction): Server;
export {};
