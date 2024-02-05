import * as z from "zod";
import * as YandexPfImport from "./YandexPf";
import * as ProfileWalkImport from "./ProfileWalk";
export declare const YandexPf: typeof YandexPfImport;
export declare const ProfileWalk: typeof ProfileWalkImport;
export declare const tasksZod: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
export declare const taskResultsZod: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
