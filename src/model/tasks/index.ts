import * as z from "zod";
import * as YandexPfImport from "./YandexPf";
import * as ProfileWalkImport from "./ProfileWalk";

export const YandexPf = YandexPfImport
export const ProfileWalk = ProfileWalkImport

export const tasksZod = z.discriminatedUnion("type", [
    YandexPf.Params.paramsZod,
    ProfileWalk.Params.paramsZod,
])
export type TasksZod = z.infer<typeof taskResultsZod>

export const taskResultsZod = z.discriminatedUnion("type", [
    YandexPf.Result.resultZod,
    ProfileWalk.Result.resultZod,
])
export type TaskResultsZod = z.infer<typeof taskResultsZod>
