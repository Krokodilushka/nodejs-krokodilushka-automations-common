import * as z from "zod";

export const proxyRegex = /^(.*):(.*)@(.*)(.*)$/
export const CookieZod = z.object({
    name: z.string(),
    value: z.string(),
    domain: z.string().min(1),
    path: z.string().min(1),
    expires: z.number(),
    httpOnly: z.boolean(),
    secure: z.boolean(),
    sameSite: z.enum(["Strict", "Lax", "None"])
}).strict()
export type CookieType = z.infer<typeof CookieZod>

export const RangeZod = (min: z.ZodNumber, max: z.ZodNumber) => z.object({
    min: min,
    max: max,
}).strict().refine(
    ({min, max}) => min <= max,
    ({min, max}) => ({
        message: `min(${min}) must be <=max(${max})`
    })
)

export const UnixTimestampSecondsZod = z.number().min(0).max(253402300799)
export const fingerprintZod = z.object({
    valid: z.literal(true)
}).passthrough()
