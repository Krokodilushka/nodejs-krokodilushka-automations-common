import * as z from "zod";
export declare const proxyRegex: RegExp;
export declare const Cookie: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
    domain: z.ZodString;
    path: z.ZodString;
    expires: z.ZodNumber;
    httpOnly: z.ZodBoolean;
    secure: z.ZodBoolean;
    sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
}, "strict", z.ZodTypeAny, {
    name: string;
    value: string;
    path: string;
    domain: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "Strict" | "Lax" | "None";
}, {
    name: string;
    value: string;
    path: string;
    domain: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "Strict" | "Lax" | "None";
}>;
export declare const Range: (min: z.ZodNumber, max: z.ZodNumber) => z.ZodEffects<z.ZodObject<{
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
export declare const UnixTimestampSeconds: z.ZodNumber;
