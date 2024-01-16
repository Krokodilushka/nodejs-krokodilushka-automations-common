import * as z from "zod";
import {Cookie} from "../../../Utils";
import {ProfileWalk, YandexPf} from "../../../tasks";

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
