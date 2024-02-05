import * as z from "zod";
export declare namespace Params {
    const urlToWalk: z.ZodObject<{
        url: z.ZodString;
        sleepOnPageMs: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        url: string;
        sleepOnPageMs: number;
    }, {
        url: string;
        sleepOnPageMs: number;
    }>;
    type UrlToWalkType = z.infer<typeof urlToWalk>;
    const paramsZod: z.ZodObject<{
        type: z.ZodLiteral<"profile_walk">;
        moveMouse: z.ZodBoolean;
        steps: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            sleepOnPageMs: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            url: string;
            sleepOnPageMs: number;
        }, {
            url: string;
            sleepOnPageMs: number;
        }>, "many">;
    }, "strict", z.ZodTypeAny, {
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
    type ParamsType = z.infer<typeof paramsZod>;
}
export declare namespace Result {
    const urlWalkResultZod: z.ZodObject<{
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
    }, "strict", z.ZodTypeAny, {
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
    type UrlWalkResultType = z.infer<typeof urlWalkResultZod>;
    const resultZod: z.ZodObject<{
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
        }, "strict", z.ZodTypeAny, {
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
    }, "strict", z.ZodTypeAny, {
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
    type ResultType = z.infer<typeof resultZod>;
}
