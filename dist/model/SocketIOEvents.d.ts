import * as z from "zod";
import { WebSocketEvents } from "./webSocketEvents";
export declare namespace ScoketIOEvents {
    interface ServerToClientEvents {
        task: (task: z.infer<typeof WebSocketEvents.Task.Task>, callback: ((activeTasks: string[]) => void)) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: (result: z.infer<typeof WebSocketEvents.Task.Result.TaskResult>, activeTasks: string[]) => void;
    }
    interface ClientInfo {
        name: string;
        tasks: string[];
    }
}
