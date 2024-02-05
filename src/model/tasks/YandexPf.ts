import * as z from "zod";
import {rangeZod} from "../Utils";

export namespace YandexPf {

    const taskType = 'yandex_pf'

    export namespace Params {
        export const paramsZod = z.object({
                type: z.literal(taskType),
                keywordID: z.string().min(1),
                keyword: z.string().min(1),
                moveMouseOnSerp: z.boolean(),
                lr: z.number().nonnegative(),
                maxPages: z.number().nonnegative(),
                sleepMsOnSerp: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                sleepMsOnIntermediate: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                sleepMsOnTarget: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                clickOnIntermediateBeforeTarget: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                targetUrl: z.string().min(1),
                followLinks: z.boolean(),
            }
        ).strict()
        export type ParamsType = z.infer<typeof paramsZod>
    }

    export namespace Result {

        export const intermediateClicksOnZod = z.object({
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            url: z.string().min(1),
            sleepMs: z.number().nonnegative()
        }).strict()
        export type IntermediateClicksOnType = z.infer<typeof intermediateClicksOnZod>

        export const taskTargetFoundZod = z.object({
            type: z.literal('target_found'),
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            targetUrl: z.string().min(1),
            intermediateClicksOn: z.array(intermediateClicksOnZod)
        }).strict()
        export type TaskTargetFoundType = z.infer<typeof taskTargetFoundZod>

        export const notFoundZod = z.object({
            type: z.literal("target_not_found"),
            intermediateClicksOn: z.array(intermediateClicksOnZod)
        }).strict()
        export type NotFoundType = z.infer<typeof notFoundZod>

        export const resultZod = z.object({
            type: z.literal(taskType),
            result: z.discriminatedUnion("type", [
                taskTargetFoundZod,
                notFoundZod
            ])
        }).strict()
        export type ResultType = z.infer<typeof resultZod>

    }
}
