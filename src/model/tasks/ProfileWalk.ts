import * as z from "zod";

export namespace ProfileWalk {

    const taskType = 'profile_walk'

    export namespace Params {
        export const UrlToWalk = z.object({
            url: z.string().min(1),
            sleepOnPageMs: z.number().nonnegative().max(300 * 1000)
        })

        export const Params = z.object({
            type: z.literal(taskType),
            moveMouse: z.boolean(),
            steps: z.array(UrlToWalk)
        })
    }

    export namespace Result {
        export const UrlWalkResult = z.object({
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
        })

        export const Result = z.object({
            type: z.literal(taskType),
            result: z.array(UrlWalkResult)
        })
    }

}
