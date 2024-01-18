import * as z from "zod";
export declare const TaskError: z.ZodObject<{
    status: z.ZodLiteral<"error">;
    message: z.ZodString;
}, "strict", z.ZodTypeAny, {
    message: string;
    status: "error";
}, {
    message: string;
    status: "error";
}>;
export declare const TaskSuccess: z.ZodObject<{
    status: z.ZodLiteral<"success">;
    data: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"yandex_pf">;
        keywordID: z.ZodString;
        keyword: z.ZodString;
        moveMouseOnSerp: z.ZodBoolean;
        lr: z.ZodNumber;
        maxPages: z.ZodNumber;
        sleepMsOnSerp: z.ZodEffects<z.ZodObject<{
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
        sleepMsOnIntermediate: z.ZodEffects<z.ZodObject<{
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
        sleepMsOnTarget: z.ZodEffects<z.ZodObject<{
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
        clickOnIntermediateBeforeTarget: z.ZodEffects<z.ZodObject<{
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
        targetUrl: z.ZodString;
        followLinks: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
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
    }>, z.ZodObject<{
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
    }>]>;
}, "strict", z.ZodTypeAny, {
    data: {
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
    } | {
        type: "profile_walk";
        moveMouse: boolean;
        steps: {
            url: string;
            sleepOnPageMs: number;
        }[];
    };
    status: "success";
}, {
    data: {
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
    } | {
        type: "profile_walk";
        moveMouse: boolean;
        steps: {
            url: string;
            sleepOnPageMs: number;
        }[];
    };
    status: "success";
}>;
export declare const TaskResult: z.ZodObject<{
    taskID: z.ZodString;
    cookies: z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        domain: z.ZodString;
        path: z.ZodString;
        expires: z.ZodNumber;
        httpOnly: z.ZodBoolean;
        secure: z.ZodBoolean;
        sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
    }, "strict", z.ZodTypeAny, {
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
    }>, "many">>;
    result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
        status: z.ZodLiteral<"error">;
        message: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        message: string;
        status: "error";
    }, {
        message: string;
        status: "error";
    }>, z.ZodObject<{
        status: z.ZodLiteral<"success">;
        data: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"yandex_pf">;
            keywordID: z.ZodString;
            keyword: z.ZodString;
            moveMouseOnSerp: z.ZodBoolean;
            lr: z.ZodNumber;
            maxPages: z.ZodNumber;
            sleepMsOnSerp: z.ZodEffects<z.ZodObject<{
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
            sleepMsOnIntermediate: z.ZodEffects<z.ZodObject<{
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
            sleepMsOnTarget: z.ZodEffects<z.ZodObject<{
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
            clickOnIntermediateBeforeTarget: z.ZodEffects<z.ZodObject<{
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
            targetUrl: z.ZodString;
            followLinks: z.ZodBoolean;
        }, "strict", z.ZodTypeAny, {
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
        }>, z.ZodObject<{
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
        }>]>;
    }, "strict", z.ZodTypeAny, {
        data: {
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
        } | {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        };
        status: "success";
    }, {
        data: {
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
        } | {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        };
        status: "success";
    }>]>;
}, "strict", z.ZodTypeAny, {
    result: {
        message: string;
        status: "error";
    } | {
        data: {
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
        } | {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        };
        status: "success";
    };
    taskID: string;
    cookies: {
        name: string;
        value: string;
        path: string;
        domain: string;
        expires: number;
        httpOnly: boolean;
        secure: boolean;
        sameSite: "Strict" | "Lax" | "None";
    }[] | null;
}, {
    result: {
        message: string;
        status: "error";
    } | {
        data: {
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
        } | {
            type: "profile_walk";
            moveMouse: boolean;
            steps: {
                url: string;
                sleepOnPageMs: number;
            }[];
        };
        status: "success";
    };
    taskID: string;
    cookies: {
        name: string;
        value: string;
        path: string;
        domain: string;
        expires: number;
        httpOnly: boolean;
        secure: boolean;
        sameSite: "Strict" | "Lax" | "None";
    }[] | null;
}>;
