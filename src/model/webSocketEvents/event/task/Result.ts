import * as z from "zod";
import * as ProfileWalk from "../../../tasks/ProfileWalk";
import * as YandexPf from "../../../tasks/YandexPf";
import {cookieZod} from "../../../Utils";

export const taskErrorZod = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
}).strict()
export type TaskErrorType = z.infer<typeof taskErrorZod>

export const taskSuccessZod = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        YandexPf.Result.resultZod,
        ProfileWalk.Result.resultZod,
    ])
}).strict()
export type TaskSuccessType = z.infer<typeof taskSuccessZod>

export const taskResultZod = z.object({
    taskID: z.string().min(1),
    browser: z.object({
        cookies: cookieZod.array().nullable(),
    }).optional(),
    result: z.discriminatedUnion("status", [
        taskErrorZod,
        taskSuccessZod
    ]),
}).strict()
export type TaskResultType = z.infer<typeof taskResultZod>
