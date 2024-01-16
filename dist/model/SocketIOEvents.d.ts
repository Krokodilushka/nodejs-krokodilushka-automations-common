import * as z from "zod";
import { Event } from "./webSocketEvents";
export declare namespace SocketIOEvents {
    interface ServerToClientEvents {
        task: (task: z.infer<typeof Event.Task.Task>, callback: ((activeTasks: string[]) => void)) => void;
        info: (callback: (name: ClientInfo) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: (result: z.infer<typeof Event.Task.Result.TaskResult>, activeTasks: string[]) => void;
    }
    interface ClientInfo {
        name: string;
        tasks: string[];
    }
}
