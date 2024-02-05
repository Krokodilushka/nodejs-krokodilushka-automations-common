"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskResultsZod = exports.tasksZod = void 0;
const z = require("zod");
const YandexPf = require("./YandexPf");
const ProfileWalk = require("./ProfileWalk");
exports.tasksZod = z.discriminatedUnion("type", [
    YandexPf.Params.paramsZod,
    ProfileWalk.Params.paramsZod,
]);
exports.taskResultsZod = z.discriminatedUnion("type", [
    YandexPf.Result.resultZod,
    ProfileWalk.Result.resultZod,
]);
