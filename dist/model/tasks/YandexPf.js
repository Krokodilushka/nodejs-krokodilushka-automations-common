"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.Params = void 0;
const z = require("zod");
const Utils_1 = require("../Utils");
const taskType = 'yandex_pf';
var Params;
(function (Params) {
    Params.paramsZod = z.object({
        type: z.literal(taskType),
        keyword: z.object({
            id: z.string().min(1),
            projectID: z.string().min(1),
            value: z.string().min(1),
            lr: z.number().nonnegative(),
        }).strict(),
        serp: z.object({
            sleepMs: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            moveMouse: z.boolean(),
            followLinks: z.boolean(),
            maxPages: z.number().nonnegative(),
        }).strict(),
        intermediatePosition: z.object({
            sleepMs: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            clicks: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
        }).strict(),
        target: z.object({
            sleepMs: (0, Utils_1.rangeZod)(z.number().nonnegative(), z.number().max(300 * 1000)),
            url: z.string().min(1),
        }).strict(),
        captcha: z.object({
            urlIn: z.string().url(),
            urlRes: z.string().url(),
            key: z.string(),
        }).strict(),
    }).strict();
})(Params || (exports.Params = Params = {}));
var Result;
(function (Result) {
    Result.intermediateClicksZod = z.object({
        page: z.number().nonnegative(),
        position: z.number().nonnegative(),
        url: z.string().url(),
        sleepMs: z.number().nonnegative()
    }).strict();
    Result.taskTargetFoundZod = z.object({
        type: z.literal('target_found'),
        page: z.number().nonnegative(),
        position: z.number().nonnegative(),
        url: z.string().url(),
        intermediateClicks: Result.intermediateClicksZod.array()
    }).strict();
    Result.notFoundZod = z.object({
        type: z.literal("target_not_found"),
        intermediateClicks: Result.intermediateClicksZod.array()
    }).strict();
    Result.resultZod = z.object({
        type: z.literal(taskType),
        result: z.discriminatedUnion("type", [
            Result.taskTargetFoundZod,
            Result.notFoundZod
        ])
    }).strict();
})(Result || (exports.Result = Result = {}));
