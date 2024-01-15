"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketEvents = void 0;
const z = require("zod");
const Utils_1 = require("../Utils");
const tasks_1 = require("../tasks");
var WebSocketEvents;
(function (WebSocketEvents) {
    let Task;
    (function (Task_1) {
        Task_1.Task = z.object({
            taskID: z.string().min(0),
            browserProfile: z.object({
                fingerprint: z.object({ valid: z.literal(true) }),
                cookies: z.array(Utils_1.Cookie),
                proxy: z.string().optional(),
                ensureShowImagesMode: z.boolean(),
            }),
            task: z.discriminatedUnion("type", [
                tasks_1.YandexPf.Params.Params,
                tasks_1.ProfileWalk.Params.Params,
            ]),
        });
        let Result;
        (function (Result) {
            Result.TaskError = z.object({
                status: z.literal('error'),
                message: z.string().min(0)
            });
            Result.TaskSuccess = z.object({
                status: z.literal('success'),
                data: z.discriminatedUnion('type', [
                    tasks_1.YandexPf.Params.Params,
                    tasks_1.ProfileWalk.Params.Params,
                ])
            });
            Result.TaskResult = z.object({
                taskID: z.string().min(0),
                cookies: z.array(Utils_1.Cookie).nullable(),
                result: z.discriminatedUnion("status", [
                    Result.TaskError,
                    Result.TaskSuccess
                ]),
            });
        })(Result = Task_1.Result || (Task_1.Result = {}));
    })(Task = WebSocketEvents.Task || (WebSocketEvents.Task = {}));
})(WebSocketEvents || (exports.WebSocketEvents = WebSocketEvents = {}));
