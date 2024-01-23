import * as z from "zod";
export declare const proxyRegex: RegExp;
export declare const CookieZod: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodOptional<z.ZodString>;
    domain: z.ZodString;
    path: z.ZodString;
    expires: z.ZodNumber;
    httpOnly: z.ZodBoolean;
    secure: z.ZodBoolean;
    sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
}, "strict", z.ZodTypeAny, {
    name: string;
    path: string;
    domain: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "Strict" | "Lax" | "None";
    value?: string | undefined;
}, {
    name: string;
    path: string;
    domain: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "Strict" | "Lax" | "None";
    value?: string | undefined;
}>;
export type CookieType = z.infer<typeof CookieZod>;
export declare const RangeZod: (min: z.ZodNumber, max: z.ZodNumber) => z.ZodEffects<z.ZodObject<{
    min: z.ZodNumber;
    max: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    max: number;
    min: number;
}, {
    max: number;
    min: number;
}>, {
    max: number;
    min: number;
}, {
    max: number;
    min: number;
}>;
export declare const UnixTimestampSecondsZod: z.ZodNumber;
export declare const fingerprintZod: z.ZodObject<{
    valid: z.ZodLiteral<true>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    valid: z.ZodLiteral<true>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    valid: z.ZodLiteral<true>;
}, z.ZodTypeAny, "passthrough">>;
