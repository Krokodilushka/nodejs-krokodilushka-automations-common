import * as z from "zod";
import {cookieZod, fingerprintZod, proxyRegex} from "../../../Utils";
import {tasksZod} from "../../../tasks";

export const TaskZod = z.object({
    browser: z.object({
        profileID: z.string().min(1),
        groupID: z.string().min(1),
        cookies: cookieZod.array(),
        fingerprint: fingerprintZod,
        imagesEnabled: z.boolean(),
        sharedCache: z.boolean(),
    }).strict(),
    proxy: z.object({
        id: z.string().min(1),
        groupID: z.string().min(1),
        value: z.string().regex(proxyRegex),
    }).strict().optional(),
    task: tasksZod,
}).strict()

export type TaskZodType = z.infer<typeof TaskZod>
