import * as z from "zod";
export declare namespace YandexPf {
    namespace Params {
        const Params: z.ZodObject<{
            type: z.ZodLiteral<"yandex_pf">;
            keywordID: z.ZodString;
            keyword: z.ZodString;
            moveMouseOnSerp: z.ZodBoolean;
            lr: z.ZodNumber;
            maxPages: z.ZodNumber;
            sleepMsOnSerp: z.ZodNumber;
            sleepMsOnIntermediate: z.ZodNumber;
            sleepMsOnTarget: z.ZodNumber;
            clickOnIntermediateBeforeTarget: z.ZodNumber;
            targetUrl: z.ZodString;
            followLinks: z.ZodBoolean;
            profileInfo: z.ZodObject<{
                walksCount: z.ZodNumber;
                firstWalk: z.ZodNullable<z.ZodNumber>;
                lastWalk: z.ZodNullable<z.ZodNumber>;
                cookies: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                    domain: z.ZodString;
                    path: z.ZodString;
                    expires: z.ZodNumber;
                    httpOnly: z.ZodBoolean;
                    secure: z.ZodBoolean;
                    sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }, {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                walksCount: number;
                firstWalk: number | null;
                lastWalk: number | null;
                cookies: {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }[];
            }, {
                walksCount: number;
                firstWalk: number | null;
                lastWalk: number | null;
                cookies: {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "yandex_pf";
            lr: number;
            keywordID: string;
            keyword: string;
            moveMouseOnSerp: boolean;
            maxPages: number;
            sleepMsOnSerp: number;
            sleepMsOnIntermediate: number;
            sleepMsOnTarget: number;
            clickOnIntermediateBeforeTarget: number;
            targetUrl: string;
            followLinks: boolean;
            profileInfo: {
                walksCount: number;
                firstWalk: number | null;
                lastWalk: number | null;
                cookies: {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }[];
            };
        }, {
            type: "yandex_pf";
            lr: number;
            keywordID: string;
            keyword: string;
            moveMouseOnSerp: boolean;
            maxPages: number;
            sleepMsOnSerp: number;
            sleepMsOnIntermediate: number;
            sleepMsOnTarget: number;
            clickOnIntermediateBeforeTarget: number;
            targetUrl: string;
            followLinks: boolean;
            profileInfo: {
                walksCount: number;
                firstWalk: number | null;
                lastWalk: number | null;
                cookies: {
                    name: string;
                    value: string;
                    path: string;
                    domain: string;
                    expires: number;
                    httpOnly: boolean;
                    secure: boolean;
                    sameSite: "Strict" | "Lax" | "None";
                }[];
            };
        }>;
    }
    namespace Result {
        const IntermediateClicksOn: z.ZodObject<{
            page: z.ZodNumber;
            position: z.ZodNumber;
            url: z.ZodString;
            sleepMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }, {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }>;
        const TaskTargetFound: z.ZodObject<{
            type: z.ZodLiteral<"target_found">;
            page: z.ZodNumber;
            position: z.ZodNumber;
            targetUrl: z.ZodString;
            intermediateClicksOn: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>;
        const NotFound: z.ZodObject<{
            type: z.ZodLiteral<"target_not_found">;
            intermediateClicksOn: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>;
        const Result: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"yandex_pf">;
            result: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"target_found">;
                page: z.ZodNumber;
                position: z.ZodNumber;
                targetUrl: z.ZodString;
                intermediateClicksOn: z.ZodArray<z.ZodObject<{
                    page: z.ZodNumber;
                    position: z.ZodNumber;
                    url: z.ZodString;
                    sleepMs: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }, {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }>, z.ZodObject<{
                type: z.ZodLiteral<"target_not_found">;
                intermediateClicksOn: z.ZodArray<z.ZodObject<{
                    page: z.ZodNumber;
                    position: z.ZodNumber;
                    url: z.ZodString;
                    sleepMs: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }, {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }>]>;
        }, "strip", z.ZodTypeAny, {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        }, {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        }>]>;
    }
}
