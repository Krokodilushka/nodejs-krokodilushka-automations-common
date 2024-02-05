"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResult = exports.TaskSuccess = exports.TaskError = void 0;
const z = require("zod");
const tasks_1 = require("../../../tasks");
const Utils_1 = require("../../../Utils");
exports.TaskError = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
}).strict();
exports.TaskSuccess = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        tasks_1.YandexPf.Result.resultZod,
        tasks_1.ProfileWalk.Result.resultZod,
    ])
}).strict();
exports.TaskResult = z.object({
    taskID: z.string().min(1),
    browser: z.object({
        cookies: Utils_1.cookieZod.array().nullable(),
    }).optional(),
    result: z.discriminatedUnion("status", [
        exports.TaskError,
        exports.TaskSuccess
    ]),
}).strict();
