import * as z from "zod";
import {Cookie} from "../Utils";

export namespace YandexPf {

    const taskType = 'yandex_pf'

    export namespace Params {
        export const Params = z.object({
                type: z.literal(taskType),
                keywordID: z.string().min(1),
                keyword: z.string().min(1),
                moveMouseOnSerp: z.boolean(),
                lr: z.number().nonnegative(),
                maxPages: z.number().nonnegative(),
                sleepMsOnSerp: z.number().nonnegative(),
                sleepMsOnIntermediate: z.number().nonnegative(),
                sleepMsOnTarget: z.number().nonnegative(),
                clickOnIntermediateBeforeTarget: z.number().nonnegative(),
                targetUrl: z.string().min(1),
                followLinks: z.boolean(),
                profileInfo: z.object({
                    walksCount: z.number().nonnegative(),
                    firstWalk: z.number().nonnegative().nullable(),
                    lastWalk: z.number().nonnegative().nullable(),
                    cookies: z.array(Cookie)
                })
            }
        )
    }

    export namespace Result {

        export const IntermediateClicksOn = z.object({
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            url: z.string().min(1),
            sleepMs: z.number().nonnegative()
        })

        export const TaskTargetFound = z.object({
            type: z.literal('target_found'),
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            targetUrl: z.string().min(0),
            intermediateClicksOn: z.array(IntermediateClicksOn)
        })

        export const NotFound = z.object({
            type: z.literal("target_not_found"),
            intermediateClicksOn: z.array(IntermediateClicksOn)
        })

        export const Result = z.discriminatedUnion("type", [
            z.object({
                type: z.literal(taskType),
                result: z.discriminatedUnion("type", [
                    TaskTargetFound,
                    NotFound
                ])
            })
        ])

    }
}
