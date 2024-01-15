"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexPf = void 0;
const z = require("zod");
const Utils_1 = require("../Utils");
var YandexPf;
(function (YandexPf) {
    const taskType = 'yandex_pf';
    let Params;
    (function (Params_1) {
        Params_1.Params = z.object({
            type: z.literal(taskType),
            keywordID: z.string().min(1),
            keyword: z.string().min(1),
            moveMouseOnSerp: z.boolean(),
            lr: z.number().nonnegative(),
            maxPages: z.number().nonnegative(),
            sleepMsOnSerp: z.number().nonnegative(),
            sleepMsOnIntermediate: z.number().nonnegative(),
            sleepMsOnTarget: z.number().nonnegative(),
            clickOnIntermediateBeforeTarget: z.number().nonnegative(),
            targetUrl: z.string().min(1),
            followLinks: z.boolean(),
            profileInfo: z.object({
                walksCount: z.number().nonnegative(),
                firstWalk: z.number().nonnegative().nullable(),
                lastWalk: z.number().nonnegative().nullable(),
                cookies: z.array(Utils_1.Cookie)
            })
        });
    })(Params = YandexPf.Params || (YandexPf.Params = {}));
    let Result;
    (function (Result_1) {
        Result_1.IntermediateClicksOn = z.object({
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            url: z.string().min(1),
            sleepMs: z.number().nonnegative()
        });
        Result_1.TaskTargetFound = z.object({
            type: z.literal('target_found'),
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            targetUrl: z.string().min(0),
            intermediateClicksOn: z.array(Result_1.IntermediateClicksOn)
        });
        Result_1.NotFound = z.object({
            type: z.literal("target_not_found"),
            intermediateClicksOn: z.array(Result_1.IntermediateClicksOn)
        });
        Result_1.Result = z.discriminatedUnion("type", [
            z.object({
                type: z.literal(taskType),
                result: z.discriminatedUnion("type", [
                    Result_1.TaskTargetFound,
                    Result_1.NotFound
                ])
            })
        ]);
    })(Result = YandexPf.Result || (YandexPf.Result = {}));
})(YandexPf || (exports.YandexPf = YandexPf = {}));