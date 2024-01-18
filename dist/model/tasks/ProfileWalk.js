"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWalk = void 0;
const z = require("zod");
var ProfileWalk;
(function (ProfileWalk) {
    const taskType = 'profile_walk';
    let Params;
    (function (Params_1) {
        Params_1.UrlToWalk = z.object({
            url: z.string().min(1),
            sleepOnPageMs: z.number().nonnegative().max(300 * 1000)
        }).strict();
        Params_1.Params = z.object({
            type: z.literal(taskType),
            moveMouse: z.boolean(),
            steps: z.array(Params_1.UrlToWalk)
        }).strict();
    })(Params = ProfileWalk.Params || (ProfileWalk.Params = {}));
    let Result;
    (function (Result_1) {
        Result_1.UrlWalkResult = z.object({
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
        Result_1.Result = z.object({
            type: z.literal(taskType),
            result: z.array(Result_1.UrlWalkResult)
        }).strict();
    })(Result = ProfileWalk.Result || (ProfileWalk.Result = {}));
})(ProfileWalk || (exports.ProfileWalk = ProfileWalk = {}));
