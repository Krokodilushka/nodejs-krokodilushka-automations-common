import { QueueTask } from "./tasks/QueueTask";
export declare namespace WebSocket {
    interface ServerToClientEvents {
        task: (a: QueueTask.QueueTask<any>) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: () => void;
    }
    interface ClientInfo {
        name: string;
    }
}
