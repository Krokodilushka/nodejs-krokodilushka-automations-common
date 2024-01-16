import * as z from "zod";
export declare namespace ProfileWalk {
    namespace Params {
        const UrlToWalk: z.ZodObject<{
            url: z.ZodString;
            sleepOnPageMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            url: string;
            sleepOnPageMs: number;
        }, {
            url: string;
            sleepOnPageMs: number;
        }>;
        const Params: z.ZodObject<{
            type: z.ZodLiteral<"profile_walk">;
            moveMouse: z.ZodBoolean;
            steps: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                sleepOnPageMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                sleepOnPageMs: number;
            }, {
                url: string;
                sleepOnPageMs: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        }, {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        }>;
    }
    namespace Result {
        const UrlWalkResult: z.ZodObject<{
            url: z.ZodString;
            result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
                status: z.ZodLiteral<"error">;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                status: "error";
            }, {
                message: string;
                status: "error";
            }>, z.ZodObject<{
                status: z.ZodLiteral<"ok">;
            }, "strip", z.ZodTypeAny, {
                status: "ok";
            }, {
                status: "ok";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }, {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }>;
        const Result: z.ZodObject<{
            type: z.ZodLiteral<"profile_walk">;
            result: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
                    status: z.ZodLiteral<"error">;
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                    status: "error";
                }, {
                    message: string;
                    status: "error";
                }>, z.ZodObject<{
                    status: z.ZodLiteral<"ok">;
                }, "strip", z.ZodTypeAny, {
                    status: "ok";
                }, {
                    status: "ok";
                }>]>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }, {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        }, {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        }>;
    }
}
