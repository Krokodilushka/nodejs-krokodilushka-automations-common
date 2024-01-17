import * as z from "zod";
import {ProfileWalk, YandexPf} from "../../../tasks";
import {Cookie} from "../../../Utils";

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
    taskID: z.string().min(0),
    cookies: z.array(Cookie).nullable(),
    result: z.discriminatedUnion("status", [
        TaskError,
        TaskSuccess
    ]),
}).strict()
