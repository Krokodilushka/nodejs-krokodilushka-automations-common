"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexPf = void 0;
const z = require("zod");
const Utils_1 = require("../Utils");
var YandexPf;
(function (YandexPf) {
    const taskType = 'yandex_pf';
    let Params;
    (function (Params) {
        Params.paramsZod = z.object({
            type: z.literal(taskType),
            keywordID: z.string().min(1),
            keyword: z.string().min(1),
            moveMouseOnSerp: z.boolean(),
            lr: z.number().nonnegative(),
            maxPages: z.number().nonnegative(),
            sleepMsOnSerp: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            sleepMsOnIntermediate: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            sleepMsOnTarget: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            clickOnIntermediateBeforeTarget: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            targetUrl: z.string().min(1),
            followLinks: z.boolean(),
        }).strict();
    })(Params = YandexPf.Params || (YandexPf.Params = {}));
    let Result;
    (function (Result) {
        Result.intermediateClicksOnZod = z.object({
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            url: z.string().min(1),
            sleepMs: z.number().nonnegative()
        }).strict();
        Result.taskTargetFoundZod = z.object({
            type: z.literal('target_found'),
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            targetUrl: z.string().min(1),
            intermediateClicksOn: z.array(Result.intermediateClicksOnZod)
        }).strict();
        Result.notFoundZod = z.object({
            type: z.literal("target_not_found"),
            intermediateClicksOn: z.array(Result.intermediateClicksOnZod)
        }).strict();
        Result.resultZod = z.object({
            type: z.literal(taskType),
            result: z.discriminatedUnion("type", [
                Result.taskTargetFoundZod,
                Result.notFoundZod
            ])
        }).strict();
    })(Result = YandexPf.Result || (YandexPf.Result = {}));
})(YandexPf || (exports.YandexPf = YandexPf = {}));
