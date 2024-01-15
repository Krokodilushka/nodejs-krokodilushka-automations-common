import * as z from "zod"
import {Cookie} from "../Utils";
import {YandexPf, ProfileWalk} from "../tasks";

export namespace WebSocketEvents {
    export namespace Task {
        export const Task = z.object({
            taskID: z.string().min(0),
            browserProfile: z.object({
                fingerprint: z.object({valid: z.literal(true)}),
                cookies: z.array(Cookie),
                proxy: z.string().optional(),
                ensureShowImagesMode: z.boolean(),
            }),
            task: z.discriminatedUnion("type", [
                YandexPf.Params.Params,
                ProfileWalk.Params.Params,
            ]),
        })

        export namespace Result {
            export const TaskError = z.object({
                status: z.literal('error'),
                message: z.string().min(0)
            })

            export const TaskSuccess = z.object({
                status: z.literal('success'),
                data: z.discriminatedUnion('type', [
                    YandexPf.Params.Params,
                    ProfileWalk.Params.Params,
                ])
            })

            export const TaskResult = z.object({
                taskID: z.string().min(0),
                cookies: z.array(Cookie).nullable(),
                result: z.discriminatedUnion("status", [
                    TaskError,
                    TaskSuccess
                ]),
            })
        }
    }
}
