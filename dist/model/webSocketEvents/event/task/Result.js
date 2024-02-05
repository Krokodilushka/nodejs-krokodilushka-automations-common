"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskResultZod = exports.taskSuccessZod = exports.taskErrorZod = void 0;
const z = require("zod");
const ProfileWalk = require("../../../tasks/ProfileWalk");
const YandexPf = require("../../../tasks/YandexPf");
const Utils_1 = require("../../../Utils");
exports.taskErrorZod = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
}).strict();
exports.taskSuccessZod = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        YandexPf.Result.resultZod,
        ProfileWalk.Result.resultZod,
    ])
}).strict();
exports.taskResultZod = z.object({
    taskID: z.string().min(1),
    browser: z.object({
        cookies: Utils_1.cookieZod.array().nullable(),
    }).optional(),
    result: z.discriminatedUnion("status", [
        exports.taskErrorZod,
        exports.taskSuccessZod
    ]),
}).strict();
