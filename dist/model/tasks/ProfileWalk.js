"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.Params = void 0;
const z = require("zod");
const taskType = 'profile_walk';
var Params;
(function (Params) {
    Params.urlToWalk = z.object({
        url: z.string().min(1),
        sleepOnPageMs: z.number().nonnegative().max(300 * 1000)
    }).strict();
    Params.paramsZod = z.object({
        type: z.literal(taskType),
        moveMouse: z.boolean(),
        steps: z.array(Params.urlToWalk)
    }).strict();
})(Params || (exports.Params = Params = {}));
var Result;
(function (Result) {
    Result.urlWalkResultZod = z.object({
        url: z.string().min(1),
        result: z.discriminatedUnion('status', [
            z.object({
                status: z.literal('error'),
                message: z.string().min(1),
            }),
            z.object({
                status: z.literal('ok')
            })
        ])
    }).strict();
    Result.resultZod = z.object({
        type: z.literal(taskType),
        result: z.array(Result.urlWalkResultZod)
    }).strict();
})(Result || (exports.Result = Result = {}));
