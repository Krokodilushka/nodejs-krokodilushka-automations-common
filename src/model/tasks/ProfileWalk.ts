import * as z from "zod";

export namespace ProfileWalk {

    const taskType = 'profile_walk'

    export namespace Params {
        export const urlToWalk = z.object({
            url: z.string().min(1),
            sleepOnPageMs: z.number().nonnegative().max(300 * 1000)
        }).strict()
        export type UrlToWalkType = z.infer<typeof urlToWalk>

        export const paramsZod = z.object({
            type: z.literal(taskType),
            moveMouse: z.boolean(),
            steps: z.array(urlToWalk)
        }).strict()
        export type ParamsType = z.infer<typeof paramsZod>
    }

    export namespace Result {
        export const urlWalkResultZod = z.object({
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
        }).strict()
        export type UrlWalkResultType = z.infer<typeof urlWalkResultZod>

        export const resultZod = z.object({
            type: z.literal(taskType),
            result: z.array(urlWalkResultZod)
        }).strict()
        export type ResultType = z.infer<typeof resultZod>
    }

}
