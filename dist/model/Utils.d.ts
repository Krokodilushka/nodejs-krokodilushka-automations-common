import * as z from "zod";
export declare const Cookie: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
    domain: z.ZodString;
    path: z.ZodString;
    expires: z.ZodNumber;
    httpOnly: z.ZodBoolean;
    secure: z.ZodBoolean;
    sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
