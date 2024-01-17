import * as z from "zod";
import {Range} from "../Utils";

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
                sleepMsOnSerp: Range(z.number().nonnegative(), z.number().max(300 * 1000)),
                sleepMsOnIntermediate: Range(z.number().nonnegative(), z.number().max(300 * 1000)),
                sleepMsOnTarget: Range(z.number().nonnegative(), z.number().max(300 * 1000)),
                clickOnIntermediateBeforeTarget: Range(z.number().nonnegative(), z.number().max(300 * 1000)),
                targetUrl: z.string().min(1),
                followLinks: z.boolean(),
            }
        ).strict()
    }

    export namespace Result {

        export const IntermediateClicksOn = z.object({
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            url: z.string().min(1),
            sleepMs: z.number().nonnegative()
        }).strict()

        export const TaskTargetFound = z.object({
            type: z.literal('target_found'),
            page: z.number().nonnegative(),
            position: z.number().nonnegative(),
            targetUrl: z.string().min(1),
            intermediateClicksOn: z.array(IntermediateClicksOn)
        }).strict()

        export const NotFound = z.object({
            type: z.literal("target_not_found"),
            intermediateClicksOn: z.array(IntermediateClicksOn)
        }).strict()

        export const Result = z.object({
            type: z.literal(taskType),
            result: z.discriminatedUnion("type", [
                TaskTargetFound,
                NotFound
            ])
        }).strict()

    }
}
