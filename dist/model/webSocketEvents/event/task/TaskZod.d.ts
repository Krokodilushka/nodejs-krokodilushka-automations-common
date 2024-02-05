import * as z from "zod";
export declare const TaskZod: z.ZodObject<{
    browser: z.ZodObject<{
        profileID: z.ZodString;
        groupID: z.ZodString;
        cookies: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        fingerprint: z.ZodObject<{
            valid: z.ZodLiteral<true>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            valid: z.ZodLiteral<true>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            valid: z.ZodLiteral<true>;
        }, z.ZodTypeAny, "passthrough">>;
        imagesEnabled: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
        profileID: string;
        groupID: string;
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
        fingerprint: {
            valid: true;
        } & {
            [k: string]: unknown;
        };
        imagesEnabled: boolean;
    }, {
        profileID: string;
        groupID: string;
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
        fingerprint: {
            valid: true;
        } & {
            [k: string]: unknown;
        };
        imagesEnabled: boolean;
    }>;
    proxy: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        groupID: z.ZodString;
        value: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        value: string;
        groupID: string;
    }, {
        id: string;
        value: string;
        groupID: string;
    }>>;
    task: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    browser: {
        profileID: string;
        groupID: string;
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
        fingerprint: {
            valid: true;
        } & {
            [k: string]: unknown;
        };
        imagesEnabled: boolean;
    };
    task: {
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
    } | {
        type: "profile_walk";
        moveMouse: boolean;
        steps: {
            url: string;
            sleepOnPageMs: number;
        }[];
    };
    proxy?: {
        id: string;
        value: string;
        groupID: string;
    } | undefined;
}, {
    browser: {
        profileID: string;
        groupID: string;
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
        fingerprint: {
            valid: true;
        } & {
            [k: string]: unknown;
        };
        imagesEnabled: boolean;
    };
    task: {
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
    } | {
        type: "profile_walk";
        moveMouse: boolean;
        steps: {
            url: string;
            sleepOnPageMs: number;
        }[];
    };
    proxy?: {
        id: string;
        value: string;
        groupID: string;
    } | undefined;
}>;
export type TaskZodType = z.infer<typeof TaskZod>;
