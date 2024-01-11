import { QueueTask } from "./tasks/QueueTask";
export declare namespace WebSocket {
    interface ServerToClientEvents {
        task: (task: QueueTask.QueueTask<any>, callback: ((activeTasks: string[]) => void)) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: (result: QueueTask.QueueTaskResult<any>, activeTasks: string[]) => void;
    }
    interface ClientInfo {
        name: string;
        tasks: string[];
    }
}
