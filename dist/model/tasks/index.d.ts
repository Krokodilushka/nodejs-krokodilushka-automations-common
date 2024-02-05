import * as z from "zod";
import * as YandexPfImport from "./YandexPf";
import * as ProfileWalkImport from "./ProfileWalk";
export declare const YandexPf: typeof YandexPfImport;
export declare const ProfileWalk: typeof ProfileWalkImport;
export declare const tasksZod: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
export declare const taskResultsZod: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}, "strict", z.ZodTypeAny, {
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
}>, z.ZodObject<{
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
}>]>;
