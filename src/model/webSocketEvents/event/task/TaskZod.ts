import * as z from "zod";
import {CookieZod, fingerprintZod, proxyRegex} from "../../../Utils";
import {Tasks} from "../../../tasks";

export const TaskZod = z.object({
    browser: z.object({
        profileID: z.string().min(1),
        groupID: z.string().min(1),
        cookies: z.array(CookieZod),
        fingerprint: fingerprintZod,
        imagesEnabled: z.boolean(),
    }),
    proxy: z.object({
        id: z.string().min(1),
        groupID: z.string().min(1),
        value: z.string().regex(proxyRegex),
    }).optional(),
    task: Tasks,
}).strict()

export type TaskZodType = z.infer<typeof TaskZod>
