import * as z from "zod"
import {Event} from "./webSocketEvents";

export namespace SocketIOEvents {

    export interface ServerToClientEvents {
        task: (
            taskID: string,
            task: Event.Task.Task.TaskZodType,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: Event.Task.Result.TaskResultType,
            activeTasks: string[],
            onSuccess: ((message: string) => void),
            onRejection: ((reason: string) => void),
        ) => void;
    }

    export interface ClientInfo {
        name: string,
        tasks: string[]
    }
}
