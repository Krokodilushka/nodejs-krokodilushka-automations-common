import {Event} from "./webSocketEvents";

export namespace SocketIOEvents {

    export interface ServerToClientEvents {
        task: (
            taskID: string,
            task: Event.Task.Task.TaskZodType,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (info: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: Event.Task.Result.TaskResultType,
            activeTasks: string[],
            callback: ((response: { status: 'success', message: string } | {
                status: 'error',
                reason: string
            }) => void),
        ) => void;
        info: (info: ClientInfo) => void;
    }

    export interface ClientInfo {
        name: string,
        status: 'active' | 'stopped',
        tasks: string[]
    }
}
