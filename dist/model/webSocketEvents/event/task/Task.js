"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const z = require("zod");
const Utils_1 = require("../../../Utils");
const tasks_1 = require("../../../tasks");
exports.Task = z.object({
    taskID: z.string().min(0),
    browserProfile: z.object({
        fingerprint: z.object({ valid: z.literal(true) }),
        cookies: z.array(Utils_1.Cookie),
        proxy: z.string().optional(),
        ensureShowImagesMode: z.boolean(),
    }),
    task: tasks_1.Tasks,
});
