import * as z from "zod"
import {WebSocketEvents} from "./webSocketEvents";

export namespace ScoketIOEvents {

    export interface ServerToClientEvents {
        task: (
            task: z.infer<typeof WebSocketEvents.Task.Task>,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: z.infer<typeof WebSocketEvents.Task.Result.TaskResult>,
            activeTasks: string[]
        ) => void;
    }

    export interface ClientInfo {
        name: string,
        tasks: string[]
    }
}
