import {QueueTask} from "./tasks/QueueTask";

export namespace WebSocket {
    export interface ServerToClientEvents {
        task: (
            task: QueueTask.QueueTask<any>,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: QueueTask.QueueTaskResult<any>,
            activeTasks: string[]
        ) => void;
    }

    export interface ClientInfo {
        name: string,
        tasks: string[]
    }
}
