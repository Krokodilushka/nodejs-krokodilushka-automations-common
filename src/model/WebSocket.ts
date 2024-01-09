import {QueueTask} from "./tasks/QueueTask";

export namespace WebSocket {
    export interface ServerToClientEvents {
        task: (a: QueueTask.QueueTask<any>) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: () => void;
    }

    export interface ClientInfo {
        name: string
    }
}