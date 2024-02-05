"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fingerprintZod = exports.unixTimestampSecondsZod = exports.rangeZod = exports.cookieZod = exports.proxyRegex = void 0;
const z = require("zod");
exports.proxyRegex = /^(.*):(.*)@(.*)(.*)$/;
exports.cookieZod = z.object({
    name: z.string(),
    value: z.string(),
    domain: z.string().min(1),
    path: z.string().min(1),
    expires: z.number(),
    httpOnly: z.boolean(),
    secure: z.boolean(),
    sameSite: z.enum(["Strict", "Lax", "None"])
}).strict();
const rangeZod = (min, max) => z.object({
    min: min,
    max: max,
}).strict().refine(({ min, max }) => min <= max, ({ min, max }) => ({
    message: `min(${min}) must be <=max(${max})`
}));
exports.rangeZod = rangeZod;
exports.unixTimestampSecondsZod = z.number().min(0).max(253402300799);
exports.fingerprintZod = z.object({
    valid: z.literal(true)
}).passthrough();
