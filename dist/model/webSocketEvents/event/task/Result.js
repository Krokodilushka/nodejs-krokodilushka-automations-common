"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResult = exports.TaskSuccess = exports.TaskError = void 0;
const z = require("zod");
const tasks_1 = require("../../../tasks");
const Utils_1 = require("../../../Utils");
exports.TaskError = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
});
exports.TaskSuccess = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        tasks_1.YandexPf.Params.Params,
        tasks_1.ProfileWalk.Params.Params,
    ])
});
exports.TaskResult = z.object({
    taskID: z.string().min(0),
    cookies: z.array(Utils_1.Cookie).nullable(),
    result: z.discriminatedUnion("status", [
        exports.TaskError,
        exports.TaskSuccess
    ]),
});
