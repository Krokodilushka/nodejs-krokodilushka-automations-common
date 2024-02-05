import * as z from "zod";
import {rangeZod} from "../Utils";


const taskType = 'yandex_pf'

export namespace Params {
    export const paramsZod = z.object({
            type: z.literal(taskType),
            keyword: z.object({
                id: z.string().min(1),
                projectID: z.string().min(1),
                value: z.string().min(1),
                lr: z.number().nonnegative(),
            }).strict(),
            serp: z.object({
                sleepMs: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                moveMouse: z.boolean(),
                followLinks: z.boolean(),
                maxPages: z.number().nonnegative(),
            }).strict(),
            intermediatePosition: z.object({
                sleepMs: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                clicks: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
            }).strict(),
            target: z.object({
                sleepMs: rangeZod(z.number().nonnegative(), z.number().max(300 * 1000)),
                url: z.string().min(1),
            }).strict(),
            captcha: z.object({
                urlIn: z.string().url(),
                urlRes: z.string().url(),
                key: z.string(),
            }).strict(),
        }
    ).strict()
    export type ParamsType = z.infer<typeof paramsZod>
}

export namespace Result {

    export const intermediateClicksZod = z.object({
        page: z.number().nonnegative(),
        position: z.number().nonnegative(),
        url: z.string().url(),
        sleepMs: z.number().nonnegative()
    }).strict()
    export type IntermediateClicksOnType = z.infer<typeof intermediateClicksZod>

    export const taskTargetFoundZod = z.object({
        type: z.literal('target_found'),
        page: z.number().nonnegative(),
        position: z.number().nonnegative(),
        url: z.string().url(),
        intermediateClicks: intermediateClicksZod.array()
    }).strict()
    export type TaskTargetFoundType = z.infer<typeof taskTargetFoundZod>

    export const notFoundZod = z.object({
        type: z.literal("target_not_found"),
        intermediateClicks: intermediateClicksZod.array()
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
