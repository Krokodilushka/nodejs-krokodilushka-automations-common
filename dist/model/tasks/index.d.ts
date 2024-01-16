import * as z from "zod";
import { YandexPf as YandexPfImport } from "./YandexPf";
import { ProfileWalk as ProfileWalkImport } from "./ProfileWalk";
export declare const YandexPf: typeof YandexPfImport;
export declare const ProfileWalk: typeof ProfileWalkImport;
export declare const Tasks: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
