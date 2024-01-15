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
