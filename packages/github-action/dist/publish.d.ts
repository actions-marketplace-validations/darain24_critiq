import type { ReviewCategory, ReviewComment } from '@critiq-dev/review-core';
export interface ReviewOctokit {
    rest: {
        pulls: {
            listReviewComments(input: {
                owner: string;
                repo: string;
                pull_number: number;
                per_page: number;
            }): Promise<{
                data: ExistingInlineComment[];
            }>;
            createReviewComment(input: {
                owner: string;
                repo: string;
                pull_number: number;
                commit_id: string;
                path: string;
                line: number;
                side: 'RIGHT';
                body: string;
            }): Promise<unknown>;
            updateReviewComment(input: {
                owner: string;
                repo: string;
                comment_id: number;
                body: string;
            }): Promise<unknown>;
            deleteReviewComment(input: {
                owner: string;
                repo: string;
                comment_id: number;
            }): Promise<unknown>;
        };
        issues: {
            listComments(input: {
                owner: string;
                repo: string;
                issue_number: number;
                per_page: number;
            }): Promise<{
                data: ExistingIssueComment[];
            }>;
            createComment(input: {
                owner: string;
                repo: string;
                issue_number: number;
                body: string;
            }): Promise<unknown>;
            updateComment(input: {
                owner: string;
                repo: string;
                comment_id: number;
                body: string;
            }): Promise<unknown>;
            deleteComment(input: {
                owner: string;
                repo: string;
                comment_id: number;
            }): Promise<unknown>;
        };
    };
}
interface ExistingInlineComment {
    id: number;
    path?: string | null;
    line?: number | null;
    body?: string;
    user?: {
        login?: string;
    } | null;
}
interface ExistingIssueComment {
    id: number;
    body?: string;
}
export interface PullRequestTarget {
    owner: string;
    repo: string;
    pullNumber: number;
    commitId: string;
}
export declare function postReview(octokit: ReviewOctokit, target: PullRequestTarget, comments: ReviewComment[], changedLines: Set<string>, warning: (message: string) => void): Promise<void>;
export declare function filterByMinimum(comments: ReviewComment[], minimum: ReviewCategory): ReviewComment[];
export declare function summaryBody(comments: ReviewComment[]): string;
export {};
