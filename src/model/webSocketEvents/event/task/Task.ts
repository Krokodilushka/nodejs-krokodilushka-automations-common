import * as z from "zod";
import {Cookie, proxyRegex} from "../../../Utils";
import {Tasks} from "../../../tasks";

export const Task = z.object({
    taskID: z.string().min(0),
    browserProfile: z.object({
        fingerprint: z.object({valid: z.literal(true)}),
        cookies: z.array(Cookie),
        proxy: z.string().regex(proxyRegex).optional(),
        ensureShowImagesMode: z.boolean(),
    }),
    task: Tasks,
}).strict()
