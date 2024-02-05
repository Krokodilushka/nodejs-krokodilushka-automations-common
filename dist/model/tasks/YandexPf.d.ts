import * as z from "zod";
export declare namespace Params {
    const paramsZod: z.ZodObject<{
        type: z.ZodLiteral<"yandex_pf">;
        keyword: z.ZodObject<{
            id: z.ZodString;
            projectID: z.ZodString;
            value: z.ZodString;
            lr: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            id: string;
            value: string;
            lr: number;
            projectID: string;
        }, {
            id: string;
            value: string;
            lr: number;
            projectID: string;
        }>;
        serp: z.ZodObject<{
            sleepMs: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
            moveMouse: z.ZodBoolean;
            followLinks: z.ZodBoolean;
            maxPages: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            sleepMs: {
                max: number;
                min: number;
            };
            moveMouse: boolean;
            followLinks: boolean;
            maxPages: number;
        }, {
            sleepMs: {
                max: number;
                min: number;
            };
            moveMouse: boolean;
            followLinks: boolean;
            maxPages: number;
        }>;
        intermediatePosition: z.ZodObject<{
            sleepMs: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
            clicks: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
        }, "strict", z.ZodTypeAny, {
            sleepMs: {
                max: number;
                min: number;
            };
            clicks: {
                max: number;
                min: number;
            };
        }, {
            sleepMs: {
                max: number;
                min: number;
            };
            clicks: {
                max: number;
                min: number;
            };
        }>;
        target: z.ZodObject<{
            sleepMs: z.ZodEffects<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
            url: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            url: string;
            sleepMs: {
                max: number;
                min: number;
            };
        }, {
            url: string;
            sleepMs: {
                max: number;
                min: number;
            };
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "yandex_pf";
        target: {
            url: string;
            sleepMs: {
                max: number;
                min: number;
            };
        };
        keyword: {
            id: string;
            value: string;
            lr: number;
            projectID: string;
        };
        serp: {
            sleepMs: {
                max: number;
                min: number;
            };
            moveMouse: boolean;
            followLinks: boolean;
            maxPages: number;
        };
        intermediatePosition: {
            sleepMs: {
                max: number;
                min: number;
            };
            clicks: {
                max: number;
                min: number;
            };
        };
    }, {
        type: "yandex_pf";
        target: {
            url: string;
            sleepMs: {
                max: number;
                min: number;
            };
        };
        keyword: {
            id: string;
            value: string;
            lr: number;
            projectID: string;
        };
        serp: {
            sleepMs: {
                max: number;
                min: number;
            };
            moveMouse: boolean;
            followLinks: boolean;
            maxPages: number;
        };
        intermediatePosition: {
            sleepMs: {
                max: number;
                min: number;
            };
            clicks: {
                max: number;
                min: number;
            };
        };
    }>;
    type ParamsType = z.infer<typeof paramsZod>;
}
export declare namespace Result {
    const intermediateClicksZod: z.ZodObject<{
        page: z.ZodNumber;
        position: z.ZodNumber;
        url: z.ZodString;
        sleepMs: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
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
    type IntermediateClicksOnType = z.infer<typeof intermediateClicksZod>;
    const taskTargetFoundZod: z.ZodObject<{
        type: z.ZodLiteral<"target_found">;
        page: z.ZodNumber;
        position: z.ZodNumber;
        url: z.ZodString;
        intermediateClicks: z.ZodArray<z.ZodObject<{
            page: z.ZodNumber;
            position: z.ZodNumber;
            url: z.ZodString;
            sleepMs: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
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
    }, "strict", z.ZodTypeAny, {
        type: "target_found";
        url: string;
        page: number;
        position: number;
        intermediateClicks: {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }[];
    }, {
        type: "target_found";
        url: string;
        page: number;
        position: number;
        intermediateClicks: {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }[];
    }>;
    type TaskTargetFoundType = z.infer<typeof taskTargetFoundZod>;
    const notFoundZod: z.ZodObject<{
        type: z.ZodLiteral<"target_not_found">;
        intermediateClicks: z.ZodArray<z.ZodObject<{
            page: z.ZodNumber;
            position: z.ZodNumber;
            url: z.ZodString;
            sleepMs: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
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
    }, "strict", z.ZodTypeAny, {
        type: "target_not_found";
        intermediateClicks: {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }[];
    }, {
        type: "target_not_found";
        intermediateClicks: {
            url: string;
            page: number;
            position: number;
            sleepMs: number;
        }[];
    }>;
    type NotFoundType = z.infer<typeof notFoundZod>;
    const resultZod: z.ZodObject<{
        type: z.ZodLiteral<"yandex_pf">;
        result: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"target_found">;
            page: z.ZodNumber;
            position: z.ZodNumber;
            url: z.ZodString;
            intermediateClicks: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
        }, "strict", z.ZodTypeAny, {
            type: "target_found";
            url: string;
            page: number;
            position: number;
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_found";
            url: string;
            page: number;
            position: number;
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"target_not_found">;
            intermediateClicks: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
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
        }, "strict", z.ZodTypeAny, {
            type: "target_not_found";
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_not_found";
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>]>;
    }, "strict", z.ZodTypeAny, {
        type: "yandex_pf";
        result: {
            type: "target_found";
            url: string;
            page: number;
            position: number;
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicks: {
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
            url: string;
            page: number;
            position: number;
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicks: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        };
    }>;
    type ResultType = z.infer<typeof resultZod>;
}
