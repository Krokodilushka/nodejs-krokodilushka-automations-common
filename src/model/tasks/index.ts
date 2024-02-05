import * as z from "zod";
import * as YandexPf from "./YandexPf";
import * as ProfileWalk from "./ProfileWalk";

export const tasksZod = z.discriminatedUnion("type", [
    YandexPf.Params.paramsZod,
    ProfileWalk.Params.paramsZod,
])

export const taskResultsZod = z.discriminatedUnion("type", [
    YandexPf.Result.resultZod,
    ProfileWalk.Result.resultZod,
])
