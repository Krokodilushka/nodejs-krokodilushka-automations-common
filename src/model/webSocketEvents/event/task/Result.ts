import * as z from "zod";
import {ProfileWalk, YandexPf} from "../../../tasks";
import {CookieZod} from "../../../Utils";

export const TaskError = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
}).strict()

export const TaskSuccess = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        YandexPf.Params.Params,
        ProfileWalk.Params.Params,
    ])
}).strict()

export const TaskResult = z.object({
    taskID: z.string().min(1),
    browser: z.object({
        cookies: z.array(CookieZod),
    }).optional(),
    result: z.discriminatedUnion("status", [
        TaskError,
        TaskSuccess
    ]),
}).strict()
