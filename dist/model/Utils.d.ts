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
