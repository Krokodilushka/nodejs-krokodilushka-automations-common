import * as z from "zod";
import {YandexPf as YandexPfImport} from "./YandexPf";
import {ProfileWalk as ProfileWalkImport} from "./ProfileWalk";

export const YandexPf = YandexPfImport
export const ProfileWalk = ProfileWalkImport

export const Tasks = z.discriminatedUnion("type", [
    YandexPfImport.Params.paramsZod,
    ProfileWalkImport.Params.paramsZod,
])

export const TaskResults = z.discriminatedUnion("type", [
    YandexPfImport.Result.resultZod,
    ProfileWalkImport.Result.resultZod,
])
