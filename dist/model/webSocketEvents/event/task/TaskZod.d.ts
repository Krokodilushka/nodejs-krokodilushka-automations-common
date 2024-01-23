import * as z from "zod";
export declare const TaskZod: z.ZodObject<{
    taskID: z.ZodString;
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
    }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    taskID: string;
    task: {
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
    taskID: string;
    task: {
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
    proxy?: {
        id: string;
        value: string;
        groupID: string;
    } | undefined;
}>;
export type TaskZodType = z.infer<typeof TaskZod>;
