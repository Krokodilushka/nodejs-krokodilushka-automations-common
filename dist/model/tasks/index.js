"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskResultsZod = exports.tasksZod = exports.ProfileWalk = exports.YandexPf = void 0;
const z = require("zod");
const YandexPfImport = require("./YandexPf");
const ProfileWalkImport = require("./ProfileWalk");
exports.YandexPf = YandexPfImport;
exports.ProfileWalk = ProfileWalkImport;
exports.tasksZod = z.discriminatedUnion("type", [
    exports.YandexPf.Params.paramsZod,
    exports.ProfileWalk.Params.paramsZod,
]);
exports.taskResultsZod = z.discriminatedUnion("type", [
    exports.YandexPf.Result.resultZod,
    exports.ProfileWalk.Result.resultZod,
]);
