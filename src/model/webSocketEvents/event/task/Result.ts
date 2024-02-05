import * as z from "zod";
import {ProfileWalk, YandexPf} from "../../../tasks";
import {cookieZod} from "../../../Utils";
import {TaskZod} from "./TaskZod";

export const TaskError = z.object({
    status: z.literal('error'),
    message: z.string().min(0)
}).strict()
export type TaskErrorType = z.infer<typeof TaskError>

export const TaskSuccess = z.object({
    status: z.literal('success'),
    data: z.discriminatedUnion('type', [
        YandexPf.Result.resultZod,
        ProfileWalk.Result.resultZod,
    ])
}).strict()
export type TaskSuccessType = z.infer<typeof TaskSuccess>

export const TaskResult = z.object({
    taskID: z.string().min(1),
    browser: z.object({
        cookies: cookieZod.array().nullable(),
    }).optional(),
    result: z.discriminatedUnion("status", [
        TaskError,
        TaskSuccess
    ]),
}).strict()
export type TaskResultType = z.infer<typeof TaskResult>
