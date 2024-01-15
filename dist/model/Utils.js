"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookie = void 0;
const z = require("zod");
exports.Cookie = z.object({
    name: z.string().min(0),
    value: z.string().min(0),
    domain: z.string().min(0),
    path: z.string().min(0),
    expires: z.number().nonnegative(),
    httpOnly: z.boolean(),
    secure: z.boolean(),
    sameSite: z.enum(["Strict", "Lax", "None"])
});
