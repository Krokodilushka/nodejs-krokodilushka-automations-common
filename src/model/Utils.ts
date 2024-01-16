import * as z from "zod";

export const Cookie = z.object({
    name: z.string().min(0),
    value: z.string().min(0),
    domain: z.string().min(0),
    path: z.string().min(0),
    expires: z.number().nonnegative(),
    httpOnly: z.boolean(),
    secure: z.boolean(),
    sameSite: z.enum(["Strict", "Lax", "None"])
})

export const Range = (min: z.ZodNumber, max: z.ZodNumber) => z.object({
    min: min,
    max: max,
}).refine(
    ({min, max}) => min <= max,
    ({min, max}) => ({
        message: `min(${min}) must be <=max(${max})`
    })
)

export const UnixTimestampSeconds = z.number().min(0).max(253402300799)
