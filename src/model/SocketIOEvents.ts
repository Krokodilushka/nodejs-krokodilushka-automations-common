import * as z from "zod"
import {Event} from "./webSocketEvents";

export namespace SocketIOEvents {

    export interface ServerToClientEvents {
        task: (
            task: z.infer<typeof Event.Task.Task>,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: z.infer<typeof Event.Task.Result.TaskResult>,
            activeTasks: string[]
        ) => void;
    }

    export interface ClientInfo {
        name: string,
        tasks: string[]
    }
}
