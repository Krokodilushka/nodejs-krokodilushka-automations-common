"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskZod = void 0;
const z = require("zod");
const Utils_1 = require("../../../Utils");
const tasks_1 = require("../../../tasks");
exports.TaskZod = z.object({
    browser: z.object({
        profileID: z.string().min(1),
        groupID: z.string().min(1),
        cookies: Utils_1.cookieZod.array(),
        fingerprint: Utils_1.fingerprintZod,
        imagesEnabled: z.boolean(),
        sharedCache: z.boolean(),
    }).strict(),
    proxy: z.object({
        id: z.string().min(1),
        groupID: z.string().min(1),
        value: z.string().regex(Utils_1.proxyRegex),
    }).strict().optional(),
    task: tasks_1.tasksZod,
}).strict();
