"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOEvents = void 0;
const z = require("zod");
var SocketIOEvents;
(function (SocketIOEvents) {
    SocketIOEvents.clientInfoZod = z.object({
        name: z.string(),
        status: z.enum(['active', 'stopped']),
        tasks: z.string().array(),
    });
})(SocketIOEvents || (exports.SocketIOEvents = SocketIOEvents = {}));
