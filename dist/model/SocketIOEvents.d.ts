import { Event } from "./webSocketEvents";
export declare namespace SocketIOEvents {
    interface ServerToClientEvents {
        task: (taskID: string, task: Event.Task.Task.TaskZodType, callback: ((activeTasks: string[]) => void)) => void;
        info: (callback: (info: ClientInfo) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: (result: Event.Task.Result.TaskResultType, activeTasks: string[], callback: ((response: {
            status: 'success';
            message: string;
        } | {
            status: 'error';
            reason: string;
        }) => void)) => void;
    }
    interface ClientInfo {
        name: string;
        tasks: string[];
    }
}
