"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = exports.ProfileWalk = exports.YandexPf = void 0;
const z = require("zod");
const YandexPf_1 = require("./YandexPf");
const ProfileWalk_1 = require("./ProfileWalk");
exports.YandexPf = YandexPf_1.YandexPf;
exports.ProfileWalk = ProfileWalk_1.ProfileWalk;
exports.Tasks = z.discriminatedUnion("type", [
    YandexPf_1.YandexPf.Params.Params,
    ProfileWalk_1.ProfileWalk.Params.Params,
]);
