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
            sleepMsOnSerp: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>;
            sleepMsOnIntermediate: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>;
            sleepMsOnTarget: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>;
            clickOnIntermediateBeforeTarget: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>, {
                max: number;
                min: number;
            }, {
                max: number;
                min: number;
            }>;
            targetUrl: z.ZodString;
            followLinks: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: "yandex_pf";
            lr: number;
            keywordID: string;
            keyword: string;
            moveMouseOnSerp: boolean;
            maxPages: number;
            sleepMsOnSerp: {
                max: number;
                min: number;
            };
            sleepMsOnIntermediate: {
                max: number;
                min: number;
            };
            sleepMsOnTarget: {
                max: number;
                min: number;
            };
            clickOnIntermediateBeforeTarget: {
                max: number;
                min: number;
            };
            targetUrl: string;
            followLinks: boolean;
        }, {
            type: "yandex_pf";
            lr: number;
            keywordID: string;
            keyword: string;
            moveMouseOnSerp: boolean;
            maxPages: number;
            sleepMsOnSerp: {
                max: number;
                min: number;
            };
            sleepMsOnIntermediate: {
                max: number;
                min: number;
            };
            sleepMsOnTarget: {
                max: number;
                min: number;
            };
            clickOnIntermediateBeforeTarget: {
                max: number;
                min: number;
            };
            targetUrl: string;
            followLinks: boolean;
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
