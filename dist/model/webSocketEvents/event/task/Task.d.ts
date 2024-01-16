import * as z from "zod";
export declare const Task: z.ZodObject<{
    taskID: z.ZodString;
    browserProfile: z.ZodObject<{
        fingerprint: z.ZodObject<{
            valid: z.ZodLiteral<true>;
        }, "strip", z.ZodTypeAny, {
            valid: true;
        }, {
            valid: true;
        }>;
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
        proxy: z.ZodOptional<z.ZodString>;
        ensureShowImagesMode: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        fingerprint: {
            valid: true;
        };
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
        ensureShowImagesMode: boolean;
        proxy?: string | undefined;
    }, {
        fingerprint: {
            valid: true;
        };
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
        ensureShowImagesMode: boolean;
        proxy?: string | undefined;
    }>;
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
    }>, z.ZodObject<{
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
    }>]>;
}, "strip", z.ZodTypeAny, {
    taskID: string;
    browserProfile: {
        fingerprint: {
            valid: true;
        };
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
        ensureShowImagesMode: boolean;
        proxy?: string | undefined;
    };
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
}, {
    taskID: string;
    browserProfile: {
        fingerprint: {
            valid: true;
        };
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
        ensureShowImagesMode: boolean;
        proxy?: string | undefined;
    };
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
}>;