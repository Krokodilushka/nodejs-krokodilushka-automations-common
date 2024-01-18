"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnixTimestampSeconds = exports.Range = exports.Cookie = exports.proxyRegex = void 0;
const z = require("zod");
exports.proxyRegex = /^(.*):(.*)@(.*)(.*)$/;
exports.Cookie = z.object({
    name: z.string().min(0),
    value: z.string().min(0),
    domain: z.string().min(0),
    path: z.string().min(0),
    expires: z.number().nonnegative(),
    httpOnly: z.boolean(),
    secure: z.boolean(),
    sameSite: z.enum(["Strict", "Lax", "None"])
}).strict();
const Range = (min, max) => z.object({
    min: min,
    max: max,
}).strict().refine(({ min, max }) => min <= max, ({ min, max }) => ({
    message: `min(${min}) must be <=max(${max})`
}));
exports.Range = Range;
exports.UnixTimestampSeconds = z.number().min(0).max(253402300799);
